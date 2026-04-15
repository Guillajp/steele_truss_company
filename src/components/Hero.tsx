import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-brand-slate text-white py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[70vh] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-slate opacity-90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-orange font-semibold tracking-widest uppercase mb-4"
        >
          Built on Trust and Quality
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-8"
        >
          STEELE TRUSS <span className="text-brand-orange">COMPANY.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="text-xl md:text-3xl font-light italic text-gray-300 mb-10 border-l-4 border-brand-orange pl-6 my-8 text-left">
            "In construction you’re only as good as the people you surround yourself by."
          </blockquote>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Located in Plattsburgh, New York, we specialize in the design, engineering, manufacturing, and delivery of high-quality Wood and Light Gauge Cold-Formed Steel components across NY, VT, and NH.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#quote" className="bg-brand-orange text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/20">
            Get a Quote
          </a>
          <a href="#specs" className="bg-white text-brand-slate px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Our Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
