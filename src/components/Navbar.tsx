import { ShoppingBag, Search, Menu, User, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Menu className="w-6 h-6 lg:hidden cursor-pointer" />
          <div className="hidden lg:flex items-center gap-6">
            <a href="#menu" className="text-sm font-medium hover:text-brand-mocha transition-colors">Menu</a>
            <a href="#rewards" className="text-sm font-medium hover:text-brand-mocha transition-colors">Rewards</a>
            <a href="#locations" className="text-sm font-medium hover:text-brand-mocha transition-colors">Locations</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <h1 className="display-text text-2xl md:text-3xl font-bold tracking-tight text-brand-wood">
            BREW <span className="text-brand-gold italic">HAVEN</span>
          </h1>
          <div className="h-0.5 w-12 bg-brand-gold mt-1" />
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={onOpenSearch}
            className="p-2 hover:bg-brand-sand rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:block p-2 hover:bg-brand-sand rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hidden md:block p-2 hover:bg-brand-sand rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:bg-brand-sand rounded-full transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 w-4 h-4 bg-brand-gold text-white text-[10px] font-bold flex items-center justify-center rounded-full"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
