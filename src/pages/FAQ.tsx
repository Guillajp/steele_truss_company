import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is the typical lead time for roof trusses?",
    answer: "Our typical lead time is 2-4 weeks from the date of final design approval. However, this can vary based on seasonal demand and project complexity. We recommend contacting us early in your planning phase."
  },
  {
    question: "Do you provide PE-stamped engineering drawings?",
    answer: "Yes, all our truss systems come with comprehensive, PE-stamped engineering drawings that meet or exceed local building codes in the states we serve."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve New York, New Jersey, and the entire New England region. Our logistics team is experienced in delivering to both urban and rural jobsites across these areas."
  },
  {
    question: "Can you convert my stick-framed roof to a truss system?",
    answer: "Absolutely. Our engineering team specializes in converting traditional stick-framed designs into efficient truss systems, which often results in significant labor and material savings."
  },
  {
    question: "What information do I need to provide for a quote?",
    answer: "To provide an accurate quote, we typically need a full set of architectural blueprints, including floor plans, roof plans, and elevations. Information on local snow and wind loads is also helpful."
  },
  {
    question: "Are floor trusses better than I-joists?",
    answer: "Floor trusses offer several advantages, including longer clear spans and an open-web design that simplifies the installation of plumbing, electrical, and HVAC systems without the need for drilling."
  },
  {
    question: "Do you offer jobsite delivery?",
    answer: "Yes, we have a fleet of specialized trailers designed for safe and efficient truss delivery. We coordinate closely with your site supervisor to ensure timely arrival."
  },
  {
    question: "How do I handle trusses on the jobsite?",
    answer: "Trusses should be stored vertically on a level surface and protected from the elements. We provide detailed handling and bracing instructions with every delivery to ensure safety and structural integrity."
  },
  {
    question: "What software do you use for design?",
    answer: "We utilize the industry-leading MiTek Sapphire software suite, which allows for precise 3D modeling and seamless integration between design and manufacturing."
  },
  {
    question: "Can you manufacture steel trusses as well?",
    answer: "Yes, we specialize in both wood and cold-formed steel (CFS) truss and wall systems, providing versatile solutions for residential, commercial, and agricultural projects."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void; key?: any }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-brand-orange' : 'text-brand-slate group-hover:text-brand-orange'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-6 h-6 text-brand-orange" /> : <Plus className="w-6 h-6 text-slate-400" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 font-medium leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-brand-grey min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-slate py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h1>
          <p className="text-xl text-white/60 font-medium max-w-2xl">
            Everything you need to know about our engineering process, manufacturing, and delivery.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-xl border-t-4 border-brand-orange">
          <div className="divide-y divide-slate-200">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-brand-slate uppercase tracking-tight mb-6">Still have questions?</h2>
          <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto">
            Our technical support team is available Monday through Friday to assist with any specific project inquiries.
          </p>
          <a 
            href="tel:518-562-4663"
            className="inline-flex items-center gap-3 bg-brand-slate text-white font-black px-10 py-5 uppercase tracking-widest hover:bg-brand-orange transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            Call 518-562-4663
          </a>
        </div>
      </section>
    </div>
  );
}
