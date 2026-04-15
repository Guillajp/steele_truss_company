import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle } from "lucide-react";

interface EngineeringFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EngineeringForm({ isOpen, onClose }: EngineeringFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-slate/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-brand-orange transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 sm:p-12">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-brand-slate uppercase tracking-tight mb-4">Request Sent!</h3>
                  <p className="text-slate-500 font-medium">Our engineering team will review your project and contact you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-brand-slate uppercase tracking-tighter mb-2">Contact Engineering</h3>
                    <p className="text-slate-500 font-medium text-sm uppercase tracking-widest">Technical Project Consultation</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-brand-grey border-2 border-transparent p-4 font-bold focus:border-brand-orange outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-brand-grey border-2 border-transparent p-4 font-bold focus:border-brand-orange outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-brand-grey border-2 border-transparent p-4 font-bold focus:border-brand-orange outline-none transition-all"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Project Location</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-brand-grey border-2 border-transparent p-4 font-bold focus:border-brand-orange outline-none transition-all"
                          placeholder="City, State"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Project Needs</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-brand-grey border-2 border-transparent p-4 font-bold focus:border-brand-orange outline-none transition-all resize-none"
                        placeholder="Please describe your technical requirements, truss spans, or specific engineering challenges..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-brand-slate text-white font-black py-5 uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-orange transition-all group"
                    >
                      Send Request
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
