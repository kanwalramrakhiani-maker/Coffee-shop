import { Instagram, Twitter, Facebook, ArrowUp, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-wood text-brand-cream pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <h2 className="display-text text-3xl font-bold tracking-tight mb-6">
              BREW <span className="text-brand-gold italic">HAVEN</span>
            </h2>
            <p className="text-brand-cream/60 leading-relaxed serif-text italic mb-8">
              A sanctuary for coffee lovers. We believe in the power of a perfect brew to transform your day. Sustainably sourced, artisanally roasted.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-wood transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-8">Visit Us</h3>
            <div className="space-y-6 text-brand-cream/70 text-sm">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <p>123 Artisanal Square, Heritage District,<br />Seattle, WA 98101</p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <p>+1 (555) 000-BREW</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <p>hello@brewhaven.coffee</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-8">Brewing Hours</h3>
            <div className="space-y-4 text-brand-cream/70 text-sm">
              <div className="flex justify-between">
                <span>Mon — Thu</span>
                <span className="font-bold text-brand-cream">7:00 — 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span className="font-bold text-brand-cream">7:00 — 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-bold text-brand-cream">8:00 — 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-bold text-brand-cream">8:00 — 18:00</span>
              </div>
              <div className="pt-4 flex items-center gap-2 text-brand-gold">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Open Now</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-8">Newsletter</h3>
            <p className="text-sm text-brand-cream/60 mb-6 italic serif-text">Join the Haven for exclusive roasts and secret recipes.</p>
            <form className="space-y-3">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
               />
               <button className="w-full py-3 bg-brand-gold text-brand-wood rounded-xl font-bold text-sm shadow-lg hover:bg-brand-gold/80 transition-all">
                 Subscribe
               </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[11px] text-brand-cream/40 uppercase tracking-widest font-medium">
              &copy; 2026 Brew Haven Coffee Roasters. All rights reserved.
            </p>
            
            <div className="flex gap-8 text-[11px] text-brand-cream/40 uppercase tracking-widest font-medium">
              <a href="#" className="hover:text-brand-gold transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold transition-all">Terms of Service</a>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-brand-gold group"
              >
                Back to top
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
        </div>
      </div>
    </footer>
  );
}
