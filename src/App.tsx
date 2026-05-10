import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import OrderModal from './components/OrderModal';
import ReviewsSection from './components/ReviewsSection';
import LoyaltySection from './components/LoyaltySection';
import AIRecommendations from './components/AIRecommendations';
import CartDrawer from './components/CartDrawer';
import MobileAppPreview from './components/MobileAppPreview';
import BaristaProfiles from './components/BaristaProfiles';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const addToCart = (config: CartItem) => {
    setCart(prev => [...prev, config]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <div className="relative selection:bg-brand-gold selection:text-brand-wood">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      
      <main>
        <Hero />
        
        {/* Promotional Banner */}
        <section className="bg-brand-gold py-12 relative overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center gap-16 select-none"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="display-text text-3xl font-bold text-brand-wood/20 italic tracking-tighter">FREE DELIVERY ON FIRST ORDER</span>
                <span className="w-8 h-8 rotate-45 border-2 border-brand-wood/20" />
                <span className="display-text text-3xl font-bold text-brand-wood/20 italic tracking-tighter">20% OFF FOR HABITUAL BREWERS</span>
                <span className="w-8 h-8 rounded-full border-2 border-brand-wood/20" />
              </div>
            ))}
          </motion.div>
        </section>

        <MenuSection onSelectItem={setSelectedItem} />
        
        <AIRecommendations onSelectItem={setSelectedItem} />
        
        <LoyaltySection />
        
        <MobileAppPreview />
        
        <BaristaProfiles />

        {/* Aesthetic Instagram Style Gallery */}
        <section className="py-24 bg-brand-cream">
           <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">#BREWHAVEN</span>
                <h2 className="display-text text-4xl font-bold text-brand-wood mt-2">Captured Moments</h2>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&q=80&w=600'
                ].map((img, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 0.98 }}
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img src={img} alt="Coffee aesthetic" className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
                  </motion.div>
                ))}
             </div>
           </div>
        </section>

        <ReviewsSection />

        {/* Sustainability Section */}
        <section className="py-24 bg-brand-sand/10 border-t border-brand-sand">
           <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="display-text text-3xl font-bold text-brand-wood mb-6 italic">Sustainability in every bean.</h2>
                <p className="text-brand-mocha/70 italic serif-text text-lg leading-relaxed mb-8">
                  We partner directly with farmers who use regenerative practices. Our packaging is 100% compostable because we care about the earth as much as we care about the brew.
                </p>
                <button className="text-brand-wood font-bold underline underline-offset-8 border-brand-wood hover:text-brand-gold hover:border-brand-gold transition-colors">
                  Learn about our Earth-First policy
                </button>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-8 rounded-3xl text-center shadow-lg transform translate-y-8">
                   <p className="text-4xl font-bold text-brand-gold mb-2">100%</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Ethically Sourced</p>
                </div>
                <div className="bg-white p-8 rounded-3xl text-center shadow-lg">
                   <p className="text-4xl font-bold text-brand-olive mb-2">0%</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Plastic Waste</p>
                </div>
             </div>
           </div>
        </section>
      </main>

      <Footer />

      {/* Modals & Drawers */}
      <OrderModal 
        isOpen={!!selectedItem} 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        onAddToCart={addToCart}
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
      />

      <LiveChat />

      {/* Mobile Sticky CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 right-6 z-40 lg:hidden"
      >
        <button 
          onClick={() => setIsCartOpen(true)}
          className="w-full h-16 bg-brand-wood text-brand-cream rounded-full shadow-2xl flex items-center justify-between px-8"
        >
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-wood flex items-center justify-center font-bold">
               {cart.length}
             </div>
             <span className="font-bold">View Cart</span>
          </div>
          <span className="font-bold">
            ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </span>
        </button>
      </motion.div>
    </div>
  );
}
