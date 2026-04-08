import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Cpu, Ruler, Truck, Download, FileText } from "lucide-react";
import EngineeringForm from "./EngineeringForm";

interface SpecItem {
  icon: any;
  title: string;
  description: string;
  spec: string;
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
    spec: "Serving: NY, VT, NH, and others",
    link: {
      label: "TRUSS DESIGNS",
      url: "./images/TRUSS_DESIGNS.jpg"
    }
  },
  {
    icon: Ruler,
    title: "Wood Floor Trusses",
    description: "Open-web designs that allow for easy plumbing and electrical routing. Engineered to be the most affordable and time-saving in the industry.",
    spec: "Serving: NY, VT, NH"
  },
  {
    icon: ShieldCheck,
    title: "Wood Wall Panels",
    description: "Shorten schedules and reduce waste. Pre-fabricated in a controlled environment to ensure your construction is square, nailed, and sheathed consistently.",
    spec: "Custom Panel Conversion"
  },
  {
    icon: Cpu,
    title: "Cold-Formed Steel",
    description: "Light gauge steel wall panels and trusses manufactured with our laser jigging system for perfect quality control and sequence.",
    spec: "Serving: NE, NY, NJ, PA"
  }
];

export default function SpecsGrid() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <EngineeringForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-brand-orange font-black uppercase tracking-widest text-sm mb-4">Technical Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-slate tracking-tighter max-w-2xl">
            ENGINEERING THE FUTURE OF CONSTRUCTION.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECS.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-brand-grey border-l-4 border-brand-orange hover:bg-brand-slate hover:text-white transition-all duration-300"
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
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-slate group-hover:text-white hover:text-brand-orange transition-colors"
                  >
                    <FileText className="w-3 h-3" />
                    {spec.link.label}
                  </a>
                )}
              </div>
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
