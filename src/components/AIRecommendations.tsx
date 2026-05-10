import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Coffee, Loader2 } from 'lucide-react';
import { getDrinkRecommendation } from '../services/geminiService';
import { menuItems } from '../data';
import { MenuItem } from '../types';

interface AIRecommendationsProps {
  onSelectItem: (item: MenuItem) => void;
}

export default function AIRecommendations({ onSelectItem }: AIRecommendationsProps) {
  const [prompt, setPrompt] = useState('');
  const [recommendation, setRecommendation] = useState<{
    item: MenuItem;
    reason: string;
    pairing: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const result = await getDrinkRecommendation(prompt);
      const item = menuItems.find(i => i.id === result.recommendedItemId);
      if (item) {
        setRecommendation({
          item,
          reason: result.reason,
          pairing: result.pairingSuggestion
        });
      }
    } catch (error) {
      console.error('AI Recommendation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-brand-wood text-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3 h-3" />
            AI Barista Assistant
          </div>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-6">What's Your <span className="text-brand-gold italic">Mood</span> Today?</h2>
          <p className="text-brand-cream/70 text-lg mb-8 serif-text italic">
            Describe how you're feeling or what you're craving, and our Smart Barista will craft the perfect recommendation just for you.
          </p>

          <form onSubmit={handleRecommend} className="relative max-w-lg">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I need a sweet afternoon pick-me-up..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all"
            />
            <button
              disabled={isLoading}
              className="absolute right-2 top-2 bottom-2 w-12 bg-brand-gold rounded-xl flex items-center justify-center text-brand-wood hover:bg-brand-gold/80 transition-all disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
             {['Something cold', 'Work mode', 'Extra sweet', 'Rainy day'].map(tag => (
               <button 
                 key={tag}
                 onClick={() => setPrompt(tag)}
                 className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium hover:bg-white/5 transition-all"
               >
                 {tag}
               </button>
             ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {recommendation ? (
              <motion.div
                key="recommendation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl p-8 text-brand-wood shadow-2xl relative z-10"
              >
                <div className="flex gap-6 items-center mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                    <img src={recommendation.item.image} alt={recommendation.item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-1">Recommended for you</h4>
                    <h3 className="text-2xl font-bold italic serif-text">{recommendation.item.name}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-sand flex items-center justify-center shrink-0">
                      <Coffee className="w-4 h-4 text-brand-mocha" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed italic opacity-80">
                      “{recommendation.reason}”
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-sand flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                    </div>
                    <p className="text-sm">
                      <span className="font-bold">Perfect Pairing:</span> {recommendation.pairing}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => onSelectItem(recommendation.item)}
                  className="w-full py-4 bg-brand-wood text-brand-cream rounded-xl font-bold hover:bg-brand-mocha transition-all shadow-lg"
                >
                  Order This Drink
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-square rounded-3xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Coffee className="w-10 h-10 opacity-20" />
                </div>
                <h4 className="text-xl font-bold mb-2 opacity-40 display-text italic">Waiting for your mood...</h4>
                <p className="text-sm opacity-30 serif-text">Our AI Barista is ready to curate your perfect cup.</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Decorative glass elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold opacity-10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-mocha opacity-20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
