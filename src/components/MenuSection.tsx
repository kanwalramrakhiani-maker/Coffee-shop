import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, menuItems } from '../data';
import { MenuItem, Category } from '../types';
import { Star, Clock, Heart, Plus } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-24 bg-brand-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="display-text text-4xl md:text-5xl font-bold text-brand-wood mb-4">Explore Our Menu</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-mocha max-w-xl mx-auto italic serif-text text-lg">
            From the boldest espressos to our most delicate cold brews, find your perfect match here.
          </p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-8 mb-12 gap-4 no-scrollbar -mx-6 px-6">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeCategory === 'All' 
                ? 'bg-brand-wood text-brand-cream shadow-lg' 
                : 'bg-white text-brand-mocha hover:bg-brand-sand'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-brand-wood text-brand-cream shadow-lg' 
                  : 'bg-white text-brand-mocha hover:bg-brand-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative h-60 overflow-hidden">
                   <img 
                     src={item.image} 
                     alt={item.name} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-4 left-4 flex gap-2">
                     {item.isBestSeller && (
                       <span className="bg-brand-gold text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Best Seller</span>
                     )}
                     {item.isTrending && (
                       <span className="bg-brand-wood text-brand-cream text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Trending</span>
                     )}
                   </div>
                   <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-wood hover:text-red-500 transition-colors">
                     <Heart className="w-4 h-4" />
                   </button>
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button 
                       onClick={() => onSelectItem(item)}
                       className="px-6 py-2 bg-white text-brand-wood rounded-full font-bold shadow-lg"
                     >
                       Customize
                     </button>
                   </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">{item.category}</span>
                    <div className="flex items-center gap-1 text-xs font-bold">
                       <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                       {item.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-wood mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h3>
                  <p className="text-sm text-brand-mocha/70 mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl font-bold text-brand-wood">${item.price.toFixed(2)}</p>
                    <button 
                      onClick={() => onSelectItem(item)}
                      className="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-wood hover:bg-brand-gold hover:text-white transition-all shadow-sm"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
