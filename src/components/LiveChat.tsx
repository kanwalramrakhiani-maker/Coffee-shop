import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-sand"
          >
            <div className="bg-brand-wood p-6 text-brand-cream flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-wood font-bold">BH</div>
                 <div>
                    <h4 className="font-bold text-sm">Haven Concierge</h4>
                    <p className="text-[10px] opacity-60">Online • Replies in minutes</p>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-64 p-6 overflow-y-auto bg-brand-sand/30 flex flex-col gap-4">
               <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-xs text-brand-wood serif-text italic">
                    Welcome to Brew Haven! How can I help you find your perfect cup today?
                  </p>
               </div>
            </div>
            
            <div className="p-4 border-t border-brand-sand">
               <input 
                 type="text" 
                 placeholder="Type your message..." 
                 className="w-full bg-brand-sand/50 border-none rounded-xl py-3 px-4 text-xs focus:ring-1 focus:ring-brand-gold transition-all"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-gold rounded-full shadow-2xl flex items-center justify-center text-brand-wood"
        aria-label="Open support chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
