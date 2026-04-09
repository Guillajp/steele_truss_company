import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const CATEGORIES = ["All", "Residential", "Commercial", "Agricultural"];

const PROJECTS = [
  {
    id: 1,
    title: "Luxury Hillside Estate",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    stats: "4,500 Sq Ft • Adirondack Custom Trusses"
  },
  {
    id: 2,
    title: "Regional Logistics Hub",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    stats: "120,000 Sq Ft • Long-Span Trusses"
  },
  {
    id: 3,
    title: "Modern Dairy Facility",
    category: "Agricultural",
    image: "/steele_truss_company/images/steel-truss.JPG",
    stats: "15,000 Sq Ft • Clear-Span Design"
  },
  {
    id: 4,
    title: "Urban Apartment Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    stats: "85 Units • Wall Panels & EWP"
  },
  {
    id: 5,
    title: "Mountain Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
    stats: "2,200 Sq Ft • Catskill Timber Design"
  },
  {
    id: 6,
    title: "Equine Training Center",
    category: "Agricultural",
    image: "https://images.unsplash.com/photo-1566241440091-ec10df8db2e1?auto=format&fit=crop&q=80&w=800",
    stats: "25,000 Sq Ft • Scissor Trusses"
  }
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section className="py-24 bg-brand-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-brand-orange font-black uppercase tracking-widest text-sm mb-4">Project Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-slate tracking-tighter">
              PROVEN IN THE FIELD.
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 text-xs font-black uppercase tracking-widest transition-all",
                  activeCategory === cat
                    ? "bg-brand-orange text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                    : "bg-white text-brand-slate hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-slate"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-brand-orange text-[10px] font-black uppercase tracking-widest text-white mb-3">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
