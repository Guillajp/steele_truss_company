import { MapPin, Truck, Clock, Shield, Cpu } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="py-24 bg-brand-slate text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-brand-orange font-black uppercase tracking-widest text-sm mb-4">Logistics & Service</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
            WE DELIVER WHERE YOU BUILD.
          </h3>
          <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Based in Plattsburgh, New York, we serve the Northeast with precision-engineered wood and steel components. Our fleet ensures on-time delivery across NY, New England, and NJ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm border border-white/20">
                <Truck className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight mb-1">Wood Products</h4>
                <p className="text-sm text-white/50">Serving NY, New England, and NJ for 35+ years.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm border border-white/20">
                <Cpu className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight mb-1">Steel Products</h4>
                <p className="text-sm text-white/50">Serving NY, New England, and NJ.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm border border-white/20">
                <MapPin className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight mb-1">Plattsburgh HQ</h4>
                <p className="text-sm text-white/50">Manufacturing & Design Facility.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm border border-white/20">
                <Shield className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight mb-1">Site-Ready</h4>
                <p className="text-sm text-white/50">Delivered direct to your jobsite.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
