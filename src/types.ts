export type Category = 'Espresso' | 'Cappuccino' | 'Latte' | 'Mocha' | 'Cold Brew' | 'Frappes' | 'Seasonal Specials';

export type MilkOption = 'Whole Milk' | 'Oat Milk' | 'Almond Milk' | 'Soy Milk';
export type FlavorOption = 'Vanilla' | 'Caramel' | 'Hazelnut' | 'Chocolate' | 'Cinnamon' | 'Pumpkin Spice';
export type SizeOption = 'Small' | 'Medium' | 'Large';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isTrending?: boolean;
  ingredients?: string[];
  origin?: string;
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Barista {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CartItem extends MenuItem {
  cartId: string;
  selectedMilk: MilkOption;
  selectedFlavor?: FlavorOption;
  selectedSize: SizeOption;
  sugarLevel: number; // 0 to 100
  quantity: number;
}
