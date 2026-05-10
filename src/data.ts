import { MenuItem, Review, Barista, Category } from './types';

export const categories: Category[] = [
  'Espresso',
  'Cappuccino',
  'Latte',
  'Mocha',
  'Cold Brew',
  'Frappes',
  'Seasonal Specials'
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Espresso',
    description: 'Double shot of our signature house blend with a rich, velvety crema.',
    price: 3.50,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewsCount: 124,
    origin: 'Ethiopian Highlands'
  },
  {
    id: '2',
    name: 'Vanilla Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and airy foam with a hint of Madagascar vanilla.',
    price: 5.00,
    category: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 256,
    isBestSeller: true,
    origin: 'Colombia & Brazil'
  },
  {
    id: '3',
    name: 'Oat Milk Latte',
    description: 'Smooth espresso paired with creamy oat milk for a naturally sweet finish.',
    price: 5.50,
    category: 'Latte',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewsCount: 189,
    origin: 'Guatemala'
  },
  {
    id: '4',
    name: 'Dark Chocolate Mocha',
    description: 'Rich dark chocolate ganache swirled with espresso and velvety steamed milk.',
    price: 6.00,
    category: 'Mocha',
    image: 'https://images.unsplash.com/photo-1544787210-2211d7c928c5?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 312,
    isTrending: true,
    origin: 'Sumatra'
  },
  {
    id: '5',
    name: 'Nitro Cold Brew',
    description: 'Slow-steeped for 24 hours and infused with nitrogen for a creamy, stout-like texture.',
    price: 4.75,
    category: 'Cold Brew',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewsCount: 154,
    origin: 'Costa Rica'
  },
  {
    id: '6',
    name: 'Caramel Frappé',
    description: 'Blended coffee with buttery caramel sauce, topped with cloud-like whipped cream.',
    price: 6.50,
    category: 'Frappes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviewsCount: 423,
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Pumpkin Spice Latte',
    description: 'Warm spices, real pumpkin purée, and espresso. The ultimate seasonal comfort.',
    price: 6.25,
    category: 'Seasonal Specials',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 567,
    isTrending: true
  },
  {
    id: '8',
    name: 'Lavender Honey Latte',
    description: 'Delicate floral notes of lavender paired with raw wildflower honey and espresso.',
    price: 5.75,
    category: 'Seasonal Specials',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4586c52a?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewsCount: 89
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    userName: 'Elena Rodriguez',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'The best latte I’ve ever had! The space is so cozy and the baristas are true artists.',
    date: '2 days ago'
  },
  {
    id: 'r2',
    userName: 'Marcus Chen',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Quiet, warm, and the cold brew is exceptional. My go-to spot for remote work.',
    date: '1 week ago'
  },
  {
    id: 'r3',
    userName: 'Sarah Williams',
    userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 4,
    comment: 'Love the seasonal specials. The pumpkin spice is actually made with real pumpkin!',
    date: '2 weeks ago'
  }
];

export const baristas: Barista[] = [
  {
    id: 'b1',
    name: 'Leo Thorne',
    role: 'Head Barista',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: '10 years of experience in specialty coffee and latte art champion.'
  },
  {
    id: 'b2',
    name: 'Amara Okafor',
    role: 'Roast Master',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
    bio: 'Passionate about sourcing ethically grown beans from small-scale farms.'
  }
];
