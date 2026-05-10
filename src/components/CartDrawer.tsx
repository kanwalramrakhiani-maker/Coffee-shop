import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ArrowRight, Truck, Coffee, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (cartId: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-brand-wood/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-cream shadow-2xl z-[80] flex flex-col"
          >
            <div className="p-6 border-b border-brand-sand flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-brand-gold" />
                <h2 className="text-xl font-bold text-brand-wood display-text italic">Your Haven Order</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-brand-sand rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-sand flex items-center justify-center mb-6 opacity-50">
                    <Coffee className="w-10 h-10 text-brand-mocha" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-wood mb-2 display-text italic">The cup is half empty</h3>
                  <p className="text-sm text-brand-mocha/70 serif-text">Your cart is waiting to be filled with happiness.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      key={item.cartId}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm group"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-bold text-brand-wood">{item.name}</h4>
                          <span className="font-bold text-brand-wood">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <p className="text-[10px] uppercase font-bold text-brand-gold tracking-widest mb-2">
                           {item.selectedSize} • {item.selectedMilk} {item.selectedFlavor ? `• ${item.selectedFlavor}` : ''}
                        </p>
                        <div className="flex items-center justify-between">
                           <span className="text-xs text-brand-mocha bg-brand-sand px-2 py-0.5 rounded-full font-medium">Qty: {item.quantity}</span>
                           <button 
                             onClick={() => onRemove(item.cartId)}
                             className="text-brand-mocha/40 hover:text-red-500 transition-colors"
                           >
                             <Trash2 className="w-4 h-4" />
                           </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Order Progress Placeholder */}
                  <div className="mt-12 p-6 bg-brand-wood text-brand-cream rounded-3xl">
                     <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-6 flex items-center gap-2">
                       <Truck className="w-4 h-4" /> Track Recent Order
                     </h4>
                     <div className="space-y-6">
                        <div className="flex gap-4 items-start relative">
                           <div className="absolute top-8 left-4 w-0.5 h-6 bg-brand-gold/30" />
                           <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                             <CheckCircle2 className="w-4 h-4 text-brand-wood" />
                           </div>
                           <div>
                             <p className="text-sm font-bold">Preparation Started</p>
                             <p className="text-[10px] opacity-60 italic">10:45 AM • Barista Leo Thorne</p>
                           </div>
                        </div>
                        <div className="flex gap-4 items-start relative opacity-40">
                           <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-cream animate-pulse" />
                           </div>
                           <div>
                             <p className="text-sm font-bold">Quality Check</p>
                             <p className="text-[10px] italic">In next 5 mins</p>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-brand-sand bg-brand-sand/10">
              <div className="flex justify-between mb-4">
                <span className="text-brand-mocha font-medium">Subtotal</span>
                <span className="text-brand-wood font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-brand-mocha font-medium">Delivery</span>
                <span className="text-brand-wood font-bold">$2.50</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="text-xl font-bold display-text italic text-brand-wood">Total Price</span>
                <span className="text-2xl font-bold text-brand-wood">${(total + (items.length > 0 ? 2.50 : 0)).toFixed(2)}</span>
              </div>
              
              <button 
                disabled={items.length === 0}
                className="w-full py-5 bg-brand-wood text-brand-cream rounded-2xl font-bold text-lg flex items-center justify-center gap-4 shadow-xl hover:bg-brand-mocha transition-all disabled:opacity-50 disabled:grayscale"
              >
                Place Order Now
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="mt-6 flex justify-center items-center gap-4 opacity-50">
                 <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" className="h-6 w-auto" />
                 <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="h-6 w-auto" />
                 <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-4 w-auto" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
