import { motion } from "motion/react";
import { MessageSquare, Send, Star } from "lucide-react";
import { useState } from "react";

export default function FeedbackInternal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send to your backend or email service goes here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-brand-orange/10 flex items-center justify-center rounded-full mx-auto mb-6">
            <Send className="w-10 h-10 text-brand-orange" />
          </div>
          <h2 className="text-3xl font-black text-brand-slate uppercase tracking-tighter">Thank You</h2>
          <p className="mt-4 text-slate-500 max-w-md mx-auto">
            Your feedback is invaluable. A member of our leadership team will review your comments and reach out to you directly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-brand-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4">
              Direct <span className="text-brand-orange">Feedback</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl font-medium uppercase tracking-wide">
              How can we make it right?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 -mt-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 border-t-4 border-brand-orange">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-brand-slate mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-slate-50 border-none p-4 focus:ring-2 focus:ring-brand-orange transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-brand-slate mb-2">Project Number (Optional)</label>
                  <input type="text" className="w-full bg-slate-50 border-none p-4 focus:ring-2 focus:ring-brand-orange transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-brand-slate mb-2">What could we have done better?</label>
                <textarea rows={5} required className="w-full bg-slate-50 border-none p-4 focus:ring-2 focus:ring-brand-orange transition-all" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-slate/5 rounded-sm">
                <MessageSquare className="w-6 h-6 text-brand-orange" />
                <p className="text-sm font-bold text-brand-slate uppercase">This goes directly to our project managers.</p>
              </div>

              <button type="submit" className="w-full bg-brand-slate hover:bg-brand-orange text-white font-black py-5 uppercase tracking-widest transition-colors duration-300">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
