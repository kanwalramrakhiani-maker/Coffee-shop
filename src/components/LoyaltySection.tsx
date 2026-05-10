import { motion } from 'motion/react';
import { Gift, CreditCard, Zap, Bookmark } from 'lucide-react';

export default function LoyaltySection() {
  return (
    <section id="rewards" className="py-24 bg-brand-sand/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="relative z-10 p-1 bg-white rounded-[40px] shadow-2xl">
               <div className="bg-brand-wood rounded-[36px] overflow-hidden p-10 text-brand-cream">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-brand-cream/10 border border-white/20 flex items-center justify-center">
                      <CreditCard className="w-8 h-8 text-brand-gold" />
                    </div>
                    <div className="px-4 py-2 bg-brand-gold/20 rounded-full border border-brand-gold/50 text-[10px] font-bold tracking-widest uppercase text-brand-gold">
                      HAVEN GOLD
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <p className="text-sm font-medium opacity-60 mb-1">Hello, Elena Rodriguez</p>
                    <p className="text-3xl font-bold italic display-text tracking-wider">850 Points</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                      <span>Recent Rewards</span>
                      <span className="text-brand-gold">View All</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                        <Gift className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Free Cappuccino</p>
                        <p className="text-[10px] opacity-60">Ready to redeem</p>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
             
             {/* Background Card Offset */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/30 rounded-[40px] -z-10" />
          </div>

          <div>
            <h2 className="display-text text-4xl md:text-5xl font-bold text-brand-wood mb-8">Brew Haven <br /><span className="text-brand-gold italic">Loyalty Rewards</span></h2>
            
            <div className="space-y-8">
               <div className="flex gap-6">
                 <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-gold">
                   <Zap className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-wood mb-2">Earn Points on Every Sip</h3>
                   <p className="text-brand-mocha/70 italic serif-text leading-relaxed">
                     Get 10 points for every dollar spent. Use them to redeem free drinks, pastries, and exclusive merchandise.
                   </p>
                 </div>
               </div>

               <div className="flex gap-6">
                 <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-gold">
                   <Gift className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-wood mb-2">Birthday Treats</h3>
                   <p className="text-brand-mocha/70 italic serif-text leading-relaxed">
                     Enjoy a complimentary drink of your choice on your special day. It’s our way of saying thanks for being part of the family.
                   </p>
                 </div>
               </div>

               <div className="flex gap-6">
                 <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-gold">
                   <Bookmark className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-wood mb-2">Subscription Plans</h3>
                   <p className="text-brand-mocha/70 italic serif-text leading-relaxed">
                     Unlimited coffee for true enthusiasts. Starting at just $29/month for daily artisanal brews.
                   </p>
                 </div>
               </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 px-10 py-4 bg-brand-wood text-brand-cream rounded-full font-bold flex items-center gap-4 shadow-xl"
            >
              Join Our Rewards Program
              <CreditCard className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
