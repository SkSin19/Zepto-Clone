// ─────────────────────────────────────────────────────────
// Core data models for the homepage.
// Centralizing these means that once a real backend (Node/Express/Mongo)
// exists, only `data/*` and a future `services/api.ts` need to change —
// components and screens already consume these same shapes and stay
// untouched.
// ─────────────────────────────────────────────────────────

export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  backgroundColor: string;
}

export interface Category {
  id: string;
  name: string;
  iconUrl: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  mrp?: number; // original price, for showing a discount strike-through
  unit: string; // e.g. "500 g", "1 L", "6 pcs"
  deliveryTime: string; // e.g. "8 mins"
  discountPercent?: number;
}

export interface ProductSection {
  id: string;
  title: string;
  products: Product[];
}

export interface LocationInfo {
  label: string; // e.g. "Home"
  address: string; // e.g. "221B Baker Street, Lucknow"
  etaMinutes: number;
}
