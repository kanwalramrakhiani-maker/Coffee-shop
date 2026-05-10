import { motion } from 'motion/react';
import { baristas } from '../data';
import { Instagram, Award } from 'lucide-react';

export default function BaristaProfiles() {
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="display-text text-4xl font-bold text-brand-wood">Meet Our <span className="text-brand-gold italic">Artists</span></h2>
          <p className="text-brand-mocha italic serif-text mt-4">The craftspeople behind every perfect pour.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {baristas.map((barista) => (
            <motion.div 
              key={barista.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-brand-sand"
            >
              <div className="h-80 overflow-hidden relative group">
                <img src={barista.image} alt={barista.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-wood/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                   <div className="flex gap-4">
                     <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-gold transition-all">
                       <Instagram className="w-5 h-5" />
                     </button>
                   </div>
                </div>
              </div>
              <div className="p-8 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Award className="w-3 h-3" />
                    {barista.role}
                 </div>
                 <h3 className="text-2xl font-bold italic display-text text-brand-wood mb-4">{barista.name}</h3>
                 <p className="text-brand-mocha/70 serif-text italic leading-relaxed">
                   "{barista.bio}"
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
