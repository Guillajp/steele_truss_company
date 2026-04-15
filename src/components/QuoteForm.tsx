import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function QuoteForm() {
  const [step, setStep] = useState(1);

  return (
    <section id="quote" className="py-24 px-4 bg-brand-slate text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">GET A QUICK QUOTE.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our engineering team typically provides a preliminary quote within 48-72 business hours of blueprint submission depending on completeness and complexity of submission.
          </p>
        </div>

        <div className="bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-800 relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="flex gap-2 mb-10">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-brand-orange' : 'bg-gray-800'}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center"><span className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span> Project Details</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Project Name</label>
                    <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Project Description</label>
                    <textarea className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white h-32 focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                  </div>
                  <button onClick={() => setStep(2)} className="bg-brand-orange w-full md:w-auto text-white px-8 py-3 rounded-md font-bold hover:bg-orange-700 transition">Next Step</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center"><span className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span> Upload Blueprints</h3>
                <div className="border-2 border-dashed border-gray-600 bg-gray-800 p-16 text-center rounded-lg mb-8 hover:border-brand-orange transition cursor-pointer">
                  <div className="text-brand-orange mb-4 flex justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  </div>
                  <p className="font-medium text-lg mb-2">Drag & Drop Blueprints</p>
                  <p className="text-sm text-gray-400">Supports PDF, DXF, and DWG files (Max 50MB)</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="bg-gray-800 border border-gray-700 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-700 transition">Back</button>
                  <button onClick={() => setStep(3)} className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold hover:bg-orange-700 transition">Next Step</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center"><span className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span> Contact Details</h3>
                <div className="space-y-5 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                        <label className="block text-sm text-gray-400 mb-1">First Name</label>
                        <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                     </div>
                     <div>
                        <label className="block text-sm text-gray-400 mb-1">Last Name</label>
                        <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                     </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                    <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="bg-gray-800 border border-gray-700 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-700 transition">Back</button>
                  <button onClick={() => { alert('Thank you! Your quote request has been sent to our engineering team.'); setStep(1); }} className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold hover:bg-orange-700 transition">Submit Request</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
