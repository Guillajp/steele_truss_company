import { motion } from "motion/react";
import { Ruler, ShieldCheck, Truck } from "lucide-react";

export default function WallPanels() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-slate text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            alt="Wall Panels" 
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
            Wood Wall <span className="text-brand-orange">Panels</span>
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
            Pre-fabricated wall systems that accelerate construction schedules and ensure superior precision.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-brand-slate tracking-tight mb-8 uppercase">Precision Pre-Fabrication</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Ruler className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-slate uppercase mb-2">Laser-Guided Accuracy</h4>
                    <p className="text-slate-500 leading-relaxed">Our wall panels are built using laser jigging systems to ensure every panel is square, accurate, and built exactly to specifications.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-slate uppercase mb-2">Reduced Waste</h4>
                    <p className="text-slate-500 leading-relaxed">By pre-fabricating in a controlled environment, we significantly reduce jobsite waste and material loss.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Truck className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-slate uppercase mb-2">Faster Framing</h4>
                    <p className="text-slate-500 leading-relaxed">Our wall panel systems can reduce framing time by up to 30%, allowing you to close in your project faster.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="Wall Panel Production" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-8 -right-8 bg-brand-orange p-8 text-white hidden md:block">
                <p className="text-4xl font-black tracking-tighter uppercase">30% FASTER</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Than Stick Framing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
