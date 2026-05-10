import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Minus, Plus } from 'lucide-react';
import { MenuItem, MilkOption, FlavorOption, SizeOption } from '../types';
import { useState } from 'react';

interface OrderModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (config: any) => void;
}

const milkOptions: MilkOption[] = ['Whole Milk', 'Oat Milk', 'Almond Milk', 'Soy Milk'];
const flavorOptions: FlavorOption[] = ['Vanilla', 'Caramel', 'Hazelnut', 'Chocolate', 'Cinnamon', 'Pumpkin Spice'];
const sizeOptions: SizeOption[] = ['Small', 'Medium', 'Large'];

export default function OrderModal({ item, isOpen, onClose, onAddToCart }: OrderModalProps) {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<SizeOption>('Medium');
  const [selectedMilk, setSelectedMilk] = useState<MilkOption>('Whole Milk');
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption | undefined>();
  const [sugarLevel, setSugarLevel] = useState(50);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({
      ...item,
      selectedSize,
      selectedMilk,
      selectedFlavor,
      sugarLevel,
      quantity,
      cartId: Math.random().toString(36).substr(2, 9)
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-wood/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-brand-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80">{item.category}</p>
                <h2 className="display-text text-4xl font-bold mb-2">{item.name}</h2>
                <div className="flex items-center gap-4 text-sm opacity-90 italic">
                  <span>Origin: {item.origin || 'Signature Blend'}</span>
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <span>45 kcal</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="absolute top-6 left-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors md:hidden"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Customization Section */}
            <div className="md:w-1/2 p-8 overflow-y-auto no-scrollbar">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-brand-sand rounded-full transition-colors hidden md:block"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-8">
                {/* Size Selector */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">Select Size</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                          selectedSize === size 
                            ? 'border-brand-wood bg-brand-wood text-white shadow-lg' 
                            : 'border-brand-sand bg-white text-brand-mocha hover:border-brand-mocha'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Milk Selector */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">Milk Options</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {milkOptions.map((milk) => (
                      <button
                        key={milk}
                        onClick={() => setSelectedMilk(milk)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border-2 flex items-center justify-between transition-all ${
                          selectedMilk === milk 
                            ? 'border-brand-wood bg-brand-wood text-white' 
                            : 'border-brand-sand bg-white text-brand-mocha hover:border-brand-mocha'
                        }`}
                      >
                        {milk}
                        {selectedMilk === milk && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flavor Selector */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">Add Flavor</h3>
                  <div className="flex flex-wrap gap-2">
                    {flavorOptions.map((flavor) => (
                      <button
                        key={flavor}
                        onClick={() => setSelectedFlavor(selectedFlavor === flavor ? undefined : flavor)}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                          selectedFlavor === flavor 
                            ? 'border-brand-wood bg-brand-sand text-brand-wood' 
                            : 'border-brand-mocha/20 bg-transparent text-brand-mocha hover:border-brand-mocha'
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sugar Level */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Sugar Level</h3>
                    <span className="text-sm font-bold text-brand-wood">{sugarLevel}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="25"
                    value={sugarLevel}
                    onChange={(e) => setSugarLevel(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-brand-sand rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-brand-mocha/60 uppercase tracking-widest">
                    <span>None</span>
                    <span>Less</span>
                    <span>Medium</span>
                    <span>Sweet</span>
                    <span>Extra</span>
                  </div>
                </div>

                {/* Footer Add Section */}
                <div className="pt-8 border-top border-brand-sand flex items-center justify-between sticky bottom-0 bg-brand-cream pb-2">
                  <div className="flex items-center gap-4 bg-brand-sand p-1 rounded-full">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-wood hover:text-white transition-all shadow-sm"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-brand-wood">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-wood hover:text-white transition-all shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className="flex-1 ml-6 px-4 py-4 bg-brand-wood text-brand-cream rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-brand-mocha transition-all"
                  >
                    Add — ${(item.price * quantity).toFixed(2)}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
