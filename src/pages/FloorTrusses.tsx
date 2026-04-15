import { motion } from "motion/react";
import { Ruler, ShieldCheck, Truck } from "lucide-react";

export default function FloorTrusses() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=2000" 
            alt="Floor Trusses" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase"
          >
            Wood Floor <span className="text-brand-orange">Trusses</span>
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
            Open-web floor truss systems that provide superior strength and simplify mechanical installations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200" 
                alt="Floor Truss System" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-slate p-8 text-white hidden md:block">
                <p className="text-4xl font-black tracking-tighter uppercase">Open Web</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 text-brand-orange">Maximum Efficiency</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-brand-slate tracking-tight mb-8 uppercase">The Open-Web Advantage</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Ruler className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-slate uppercase mb-2">Mechanical Routing</h4>
                    <p className="text-slate-500 leading-relaxed">The open-web design allows for easy routing of plumbing, electrical, and HVAC systems without the need for drilling or cutting.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-slate uppercase mb-2">Long Spans</h4>
                    <p className="text-slate-500 leading-relaxed">Engineered to provide longer clear spans than traditional dimension lumber, reducing the need for interior bearing walls.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Truck className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-slate uppercase mb-2">Reduced Vibration</h4>
                    <p className="text-slate-500 leading-relaxed">Our floor trusses are designed to provide a stiff, quiet floor system that exceeds standard building code requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
