import { motion } from 'motion/react';
import { Smartphone, Download, Star, Coffee } from 'lucide-react';

export default function MobileAppPreview() {
  return (
    <section className="py-24 bg-brand-wood overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="relative z-10 w-full max-w-[300px] mx-auto">
                <div className="relative rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden bg-brand-cream aspect-[9/19]">
                   <img 
                     src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" 
                     className="w-full h-full object-cover opacity-20 absolute inset-0"
                     alt="App background"
                   />
                   <div className="relative p-6 h-full flex flex-col pt-12">
                      <div className="flex justify-between items-center mb-8">
                         <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                           <Coffee className="w-5 h-5 text-brand-wood" />
                         </div>
                         <div className="w-8 h-8 rounded-full bg-white/20" />
                      </div>
                      <h4 className="display-text text-2xl font-bold text-brand-wood mb-2">Good morning, Elena!</h4>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-6">Your usual is ready to order</p>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                         <div className="flex gap-3 items-center">
                            <div className="w-12 h-12 rounded-xl bg-brand-sand overflow-hidden">
                               <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=200" alt="Latte" className="w-full h-full object-cover" />
                            </div>
                            <div>
                               <p className="text-xs font-bold text-brand-wood">Oat Milk Latte</p>
                               <p className="text-[10px] text-brand-mocha opacity-60">Medium • Hot</p>
                            </div>
                         </div>
                      </div>

                      <div className="mt-auto bg-brand-wood rounded-2xl p-4 text-brand-cream">
                         <div className="flex justify-between items-center mb-4">
                            <p className="text-xs font-bold">Loyalty Points</p>
                            <p className="text-xs text-brand-gold">850 pts</p>
                         </div>
                         <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-4/5 h-full bg-brand-gold" />
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Floaties */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-12 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20"
                >
                  <Star className="w-5 h-5 text-brand-gold fill-current" />
                </motion.div>
                <div className="absolute -left-8 bottom-1/4 bg-brand-gold p-4 rounded-2xl shadow-xl z-20">
                  <Smartphone className="w-5 h-5 text-brand-wood" />
                </div>
             </div>
             
             {/* Background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl" />
          </div>

          <div className="order-1 lg:order-2">
             <h2 className="display-text text-4xl md:text-5xl font-bold text-brand-cream mb-8">Take the <span className="text-brand-gold italic">Haven</span> with You.</h2>
             <p className="text-brand-cream/70 text-lg serif-text italic mb-10 leading-relaxed">
               Order ahead, skip the line, and earn rewards effortlessly. Our mobile app brings the premium Brew Haven experience to the palm of your hand.
             </p>
             
             <div className="space-y-6 mb-12">
                {[
                  'One-tap reordering of your favorite cups',
                  'Exclusive app-only rewards and secret menu items',
                  'Live tracking of your delivery or pickup status'
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold">
                       <Smartphone className="w-3 h-3" />
                    </div>
                    <span className="text-brand-cream/80 font-medium">{feature}</span>
                  </div>
                ))}
             </div>
             
             <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-brand-wood rounded-full font-bold flex items-center gap-3 hover:bg-brand-gold transition-all shadow-xl">
                   <Download className="w-5 h-5" />
                   App Store
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-full font-bold flex items-center gap-3 hover:bg-white/20 border border-white/20 transition-all">
                   <Download className="w-5 h-5" />
                   Google Play
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
