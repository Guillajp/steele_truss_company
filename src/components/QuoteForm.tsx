import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, ArrowRight, ArrowLeft, FileUp, Loader2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    projectType: "",
    location: "",
    files: [] as File[],
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // Create FormData to support file uploads to Formspree
    const data = new FormData();
    data.append("projectType", formData.projectType);
    data.append("location", formData.location);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("company", formData.company);
    
    formData.files.forEach((file) => {
      data.append("blueprints", file);
    });

    try {
      const response = await fetch("https://formspree.io/f/meevpevv", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("There was an error submitting your quote. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <CheckCircle className="w-20 h-20 text-brand-orange mx-auto mb-6" />
          <h3 className="text-4xl font-black text-brand-slate mb-4 uppercase">Quote Request Sent</h3>
          <p className="text-slate-500 font-medium">
            Thank you, {formData.name}. Our estimating team has received your details and blueprints. 
            We will review and respond to {formData.email} within 48-72 hours.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-8 text-brand-orange font-black uppercase tracking-widest text-sm hover:underline"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-brand-slate tracking-tighter mb-6 uppercase">
            Get a Quick Quote.
          </h3>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Our engineering team typically provides a preliminary quote within 48-72 hours based on complexity and submitted materials.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-grey -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-brand-orange -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={cn(
                "w-10 h-10 rounded-sm flex items-center justify-center font-black text-sm z-10 transition-all duration-300",
                step >= s ? "bg-brand-orange text-white scale-110" : "bg-brand-grey text-slate-400"
              )}
            >
              {step > s ? <CheckCircle className="w-6 h-6" /> : s}
            </div>
          ))}
        </div>

        <div className="bg-brand-grey p-8 md:p-12 shadow-2xl border-t-4 border-brand-orange">
          <form onSubmit={(e) => { e.preventDefault(); if(step === 3) handleSubmit(); else nextStep(); }}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-black text-brand-slate uppercase tracking-tight mb-8">Step 1: Project Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Project Type</label>
                      <select 
                        required
                        className="w-full bg-white border-2 border-slate-200 p-4 font-bold focus:border-brand-orange outline-none transition-colors"
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      >
                        <option value="">Select Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="agricultural">Agricultural</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Project Location (Zip)</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. 12901"
                        className="w-full bg-white border-2 border-slate-200 p-4 font-bold focus:border-brand-orange outline-none transition-colors"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-black text-brand-slate uppercase tracking-tight mb-8">Step 2: Upload Blueprints</h4>
                  <label className="block border-4 border-dashed border-slate-300 bg-white p-12 text-center group hover:border-brand-orange transition-colors cursor-pointer">
                    <FileUp className="w-16 h-16 text-slate-300 group-hover:text-brand-orange mx-auto mb-4 transition-colors" />
                    <p className="text-lg font-black text-brand-slate uppercase tracking-tight mb-2">
                      {formData.files.length > 0 ? `${formData.files.length} Files Selected` : "Select Blueprints"}
                    </p>
                    <p className="text-sm text-slate-500 font-medium">Supports PDF, DXF, and DWG files (Max 50MB)</p>
                    <input 
                      type="file" 
                      className="hidden" 
                      multiple 
                      onChange={handleFileChange}
                    />
                  </label>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-black text-brand-slate uppercase tracking-tight mb-8">Step 3: Contact Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white border-2 border-slate-200 p-4 font-bold focus:border-brand-orange outline-none transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white border-2 border-slate-200 p-4 font-bold focus:border-brand-orange outline-none transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-white border-2 border-slate-200 p-4 font-bold focus:border-brand-orange outline-none transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white border-2 border-slate-200 p-4 font-bold focus:border-brand-orange outline-none transition-colors"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between">
              <button 
                type="button"
                onClick={prevStep}
                className={cn(
                  "flex items-center gap-2 font-black uppercase tracking-widest text-sm transition-all",
                  step === 1 ? "opacity-0 pointer-events-none" : "text-slate-500 hover:text-brand-slate"
                )}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <button 
                type="button"
                disabled={isSubmitting}
                onClick={step === 3 ? () => handleSubmit() : nextStep}
                className="flex items-center gap-2 bg-brand-orange text-white font-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-orange-600 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    {step === 3 ? "Submit Quote" : "Next Step"}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
