import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Cpu, Ruler, Truck, Download, FileText } from "lucide-react";
import EngineeringForm from "./EngineeringForm";

interface SpecItem {
  icon: any;
  title: string;
  description: string;
  spec: string;
  image: string;
  link?: {
    label: string;
    url: string;
  };
}

const SPECS: SpecItem[] = [
  {
    icon: Ruler,
    title: "Wood Roof Trusses",
    description: "Engineered for strength and precision. Our roof trusses are designed with easy-to-read layouts and profiles for fast, accurate installation.",
    spec: "Serving: NY, New England, and NJ",
    image: "/steele_truss_company/images/truss_design.jpg",
    link: {
      label: "TRUSS DESIGNS",
      url: "/steele_truss_company/images/truss_design.jpg"
    }
  },
  {
    icon: Ruler,
    title: "Wood Floor Trusses",
    description: "Open-web designs that allow for easy plumbing and electrical routing. Engineered to be the most affordable and time-saving in the industry.",
    spec: "Serving: NY, New England, and NJ",
    image: "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: ShieldCheck,
    title: "Wood Wall Panels",
    description: "Shorten schedules and reduce waste. Pre-fabricated in a controlled environment to ensure your construction is square, nailed, and sheathed consistently.",
    spec: "Serving: NY, New England, and NJ",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Cpu,
    title: "Cold-Formed Steel",
    description: "Light gauge steel wall panels and trusses manufactured with our laser jigging system for perfect quality control and sequence.",
    spec: "Serving: NY, New England, and NJ",
    image: "/steele_truss_company/images/steel truss.JPG"
  }
];

export default function SpecsGrid() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [activeCardImage, setActiveCardImage] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <EngineeringForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-brand-orange font-black uppercase tracking-widest text-sm mb-4">Technical Excellence</h2>
          <div 
            className="cursor-pointer group"
            onClick={() => setShowImage(!showImage)}
          >
            <AnimatePresence mode="wait">
              {!showImage ? (
                <motion.h3 
                  key="text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-4xl md:text-5xl font-black text-brand-slate group-hover:text-blue-600 transition-colors tracking-tighter max-w-2xl uppercase"
                >
                  ENGINEERING THE FUTURE OF CONSTRUCTION.
                </motion.h3>
              ) : (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-3xl h-64 md:h-80 overflow-hidden rounded-sm shadow-2xl border-4 border-brand-orange relative"
                >
                  <img 
                    src="/images/steel truss.JPG" 
                    alt="Engineering Future" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-slate/20 flex items-end p-6">
                    <p className="text-white font-black uppercase tracking-widest text-sm bg-brand-orange px-4 py-2">
                      Click to return to text
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECS.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCardImage(activeCardImage === index ? null : index)}
              className="group p-8 bg-brand-grey border-l-4 border-brand-orange hover:bg-brand-slate hover:text-white transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[350px] flex flex-col"
            >
              <AnimatePresence mode="wait">
                {activeCardImage !== index ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full"
                  >
                    <spec.icon className="w-12 h-12 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{spec.title}</h4>
                    <p className="text-sm text-slate-600 group-hover:text-white/70 mb-6 leading-relaxed">
                      {spec.description}
                    </p>
                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
                        {spec.spec}
                      </span>
                      {spec.link && (
                        <a
                          href={spec.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-slate group-hover:text-white hover:text-brand-orange transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          {spec.link.label}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 z-10"
                  >
                    <img 
                      src={spec.image} 
                      alt={spec.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-slate/40 flex items-center justify-center p-4 text-center">
                      <p className="text-white font-black uppercase tracking-widest text-xs bg-brand-orange px-3 py-1">
                        Click to return
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand-slate text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-brand-orange">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight">Need Custom Engineering?</h4>
              <p className="text-white/60 text-sm">Our in-house PE-stamped engineering team is ready to assist.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-brand-slate font-black px-8 py-4 uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors"
          >
            Contact Engineering
          </button>
        </div>
      </div>
    </section>
  );
}
