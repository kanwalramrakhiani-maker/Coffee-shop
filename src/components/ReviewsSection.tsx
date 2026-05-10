import { motion } from 'motion/react';
import { reviews } from '../data';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-10 text-brand-gold/10 pointer-events-none">
        <Quote className="w-64 h-64 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="display-text text-4xl md:text-5xl font-bold text-brand-wood mb-4">Loved by Coffee Enthusiasts</h2>
            <p className="text-brand-mocha italic serif-text text-lg">
              Don't just take our word for it. Join thousands of happy guests who start their day with Brew Haven.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center">
            <div className="text-5xl font-bold text-brand-wood mb-2">4.9</div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="text-xs font-bold text-brand-mocha uppercase tracking-widest">Average Rating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-sand/50 p-8 rounded-3xl relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold shadow-md">
                   <img src={review.userImage} alt={review.userName} className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="font-bold text-brand-wood">{review.userName}</h4>
                   <p className="text-xs text-brand-mocha/60">{review.date}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4 text-brand-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              
              <p className="text-brand-wood/80 leading-relaxed italic serif-text">
                "{review.comment}"
              </p>
              
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-8 h-8 text-brand-wood" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
           {/* Mock Brand Logos */}
           {['The Daily Coffee', 'Roaster Mag', 'Café Guide', 'Bean Weekly'].map(brand => (
             <span key={brand} className="text-xl font-bold display-text text-brand-wood uppercase tracking-tighter">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
}
