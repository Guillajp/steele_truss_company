import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import EngineeringForm from "./EngineeringForm";

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-slate">
      <EngineeringForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2070"
          alt="Upstate NY Construction"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate via-brand-slate/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            Trusted for over 35 years
          </div>
          
          <div className="mb-6">
            <p className="text-brand-orange font-black italic text-sm tracking-widest uppercase mb-2">
              "In construction you’re only as good as the people you surround yourself by."
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              STEELE TRUSS<br />
              <span className="text-brand-orange underline decoration-4 underline-offset-8">COMPANY</span>.
            </h1>
          </div>
          
          <p className="text-lg text-white/70 font-medium mb-10 max-w-xl leading-relaxed">
            Located in Plattsburgh, New York, we specialize in the design, engineering, manufacturing, and delivery of high-quality Wood and Light Gauge Cold-Formed Steel components across NY, New England, and NJ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white font-black px-8 py-5 text-base uppercase tracking-widest transition-all group"
            >
              Start a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <path d="M0 100 L50 0 L100 100 Z" />
        </svg>
      </div>
    </section>
  );
}
