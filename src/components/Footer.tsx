import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm rotate-45">
                <div className="-rotate-45 font-black text-white text-lg">S</div>
              </div>
              <span className="text-white font-black tracking-tighter text-xl uppercase">
                STEELE TRUSS
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Steele Truss Company has been a trusted name in the construction industry for over 35 years, specializing in high-quality wood and steel components.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-brand-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-brand-orange">Products</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li><Link to="/roof-trusses" className="hover:text-white transition-colors">Roof Trusses</Link></li>
              <li><Link to="/floor-trusses" className="hover:text-white transition-colors">Floor Trusses</Link></li>
              <li><Link to="/wall-panels" className="hover:text-white transition-colors">Wall Panels</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-brand-orange">Office Hours</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li>Mon-Fri: 7:00am - 3:30pm</li>
              <li>Sat-Sun: Closed</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-brand-orange">Contact</h4>
            <ul className="space-y-6 text-sm font-bold text-white/60">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>118 Trade Road,<br />Plattsburgh, NY 12901</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>518-562-4663</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>estimating@steeletruss.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            © 2026 STEELE TRUSS COMPANY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-white/30 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
