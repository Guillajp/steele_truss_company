import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const NAV_CATEGORIES = [
//  { name: "Roof Trusses", href: "#roof-trusses" },
//  { name: "Floor Trusses", href: "#floor-trusses" },
//  { name: "Wall Panels", href: "#wall-panels" },
//  { name: "EWP", href: "#ewp" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-brand-slate shadow-xl py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-sm rotate-45">
              <div className="-rotate-45 font-black text-white text-xl">S</div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tighter text-2xl leading-none">
                STEELE TRUSS
              </span>
              <span className="text-brand-orange text-[10px] font-bold tracking-[0.2em] leading-none uppercase">
                Company
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="text-white hover:text-brand-orange font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-1 group"
              >
                {cat.name}
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-tighter">
                <Phone className="w-3 h-3 text-brand-orange" />
                <span>518-562-4663</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-tighter">
                <MapPin className="w-3 h-3 text-brand-orange" />
                <span>118 trade Road Plattsburgh NY 12901</span>
              </div>
            </div>
            <button className="bg-brand-orange hover:bg-orange-600 text-white font-black px-6 py-3 text-sm uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-slate border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_CATEGORIES.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className="block text-white font-bold text-lg uppercase tracking-wider py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {cat.name}
                </a>
              ))}
              <button className="w-full bg-brand-orange text-white font-black py-4 text-center uppercase tracking-widest mt-4">
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
