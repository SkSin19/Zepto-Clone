import { Banner } from '@/types';

// Placeholder images via picsum so the carousel has real network
// images to load/transition between. Swap imageUrl values for
// real assets or a CMS-driven banner API later.

export const banners: Banner[] = [
  {
    id: 'banner-1',
    imageUrl: 'https://picsum.photos/seed/banner1/800/400',
    title: 'Flat 50% Off',
    subtitle: 'On your first order',
    backgroundColor: '#F3E8FF',
  },
  {
    id: 'banner-2',
    imageUrl: 'https://picsum.photos/seed/banner2/800/400',
    title: 'Fresh Fruits',
    subtitle: 'Starting at ₹29',
    backgroundColor: '#E8F5E9',
  },
  {
    id: 'banner-3',
    imageUrl: 'https://picsum.photos/seed/banner3/800/400',
    title: 'Dairy & Breakfast',
    subtitle: 'Up to 30% off',
    backgroundColor: '#FFF3E0',
  },
  {
    id: 'banner-4',
    imageUrl: 'https://picsum.photos/seed/banner4/800/400',
    title: 'Snacks Sale',
    subtitle: 'Buy 1 Get 1 Free',
    backgroundColor: '#FFEBEE',
  },
];
