import { motion } from 'motion/react';
import { ArrowRight, Play, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-sand/50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Premium Coffee House
          </div>
          <h1 className="display-text text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-brand-wood mb-8">
            Freshly Brewed <br />
            <span className="text-brand-gold italic">Happiness</span> <br />
            in Every Cup
          </h1>
          <p className="text-lg text-brand-mocha/80 max-w-md mb-10 leading-relaxed">
            Experience the art of artisanal roasting. We source the finest beans globally to bring you a cozy, unparalleled coffee experience.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-wood text-brand-cream rounded-full font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
            >
              Order Online
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <button className="flex items-center gap-3 text-brand-wood font-semibold hover:text-brand-mocha group transition-colors">
              <span className="w-12 h-12 rounded-full border border-brand-wood/20 flex items-center justify-center group-hover:bg-brand-wood group-hover:text-brand-cream transition-all">
                <Play className="w-4 h-4 fill-current" />
              </span>
              Our Story
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-cream overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-brand-wood">4.9/5 <span className="font-normal text-brand-mocha/60">(2.4k+ Reviews)</span></p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden shadow-2xl skew-y-3">
             <img 
               src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
               alt="Gourmet Coffee" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-wood/60 to-transparent" />
             <div className="absolute bottom-8 left-8 text-brand-cream">
               <p className="text-sm font-medium tracking-widest uppercase mb-1">Origin Spotlight</p>
               <h3 className="text-2xl font-bold italic serif-text">Ethiopian Yirgacheffe</h3>
             </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-brand-mocha font-medium">Fast Delivery</p>
              <p className="text-sm font-bold text-brand-wood">Under 15 mins</p>
            </div>
          </motion.div>

          <div className="absolute -bottom-6 -left-6 bg-brand-wood text-brand-cream p-6 rounded-2xl shadow-2xl z-20">
            <p className="text-3xl font-bold mb-1">98%</p>
            <p className="text-xs uppercase tracking-widest font-medium opacity-70">Happy Guests</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
