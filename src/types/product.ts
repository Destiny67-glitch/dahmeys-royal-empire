export type ProductCategory =
  | "Women's Fashion Clothing"
  | "Bags"
  | "Shoes"
  | "Glasses"
  | "Hair Attachments"
  | "Beauty"
  | "Cosmetics"
  | "Jewellery"
  | "Hair Products"
  | "Press-On Nails"
  | "Hair / Wigs";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  description: string;
  gradient: string;
  isNewArrival: boolean;
  inStock: boolean;
}
