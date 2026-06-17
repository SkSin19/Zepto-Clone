import { Category } from '@/types';

// Tab bar categories (horizontal scroll — emoji-style like Zepto)
export const tabCategories: Category[] = [
  { id: 'fresh', name: 'Fresh', iconUrl: 'https://imgs.search.brave.com/4-rhprf4ewwxc_h3TxUuvZjakb2HioxMZzx5RT5lzgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS81LzIvMjUv/aW1nYmluLXdhdGVy/bWVsb24tZnJ1dHRp/LWRpLWJvc2NvLXdh/dGVybWVsb24tVEJq/YXZ2Nmp3U3BYQmlu/R2pSdVZGNFJ6SF90/LmpwZw' },
  { id: 'electronics', name: 'Electronics', iconUrl: 'https://imgs.search.brave.com/_fNOIXNWU3zep6YTo6jKZx0Vzi9ydfljmbSQovRcfwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/OS8yLzE1L2hlYWRw/aG9uZXMtc3R5bGl6/ZWQtY2FydG9vbi1o/ZWFkcGhvbmVzLWls/bHVzdHJhdGlvbi0y/WjE5Q2pIM190Lmpw/Zw' },
  { id: 'fashion', name: 'Fashion', iconUrl: 'https://imgs.search.brave.com/MFM5UnLSZbXj9aV4Y7-CQcvmgZ2al7B1JP7z8QFDaew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS80/LzYvNi9jYXJ0b29u/LWRyZXNzLWNvbG9y/ZnVsLXBhdHRlcm5l/ZC1jYXJ0b29uLWRy/ZXNzLTQ5Y3NjMmNW/X3QuanBn' },
  { id: 'beauty', name: 'Beauty', iconUrl: 'https://imgs.search.brave.com/Ys4hm40T--02-qACrAOyv_CSGs1ZHuzPdOUW_p-e0Ys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8yMi8yMy8y/L2NhcnRvb24tY29t/cGFjdC1wb3dkZXIt/d2l0aC1icnVzaC1m/b3ItbWFrZXVwLWZR/VDAwamFBX3QuanBn' },
  { id: 'home', name: 'Home', iconUrl: 'https://imgs.search.brave.com/yMhQ30qTsC12K19o-2Pk5fYUuz2L-JawQver0Hp5rlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvMzA2/Lzg4NC85NjEvdmFz/ZS1mYWNhZGUtaG9t/ZS1kZWNvcmF0aW9u/LXRodW1ibmFpbC5q/cGc' },
  { id: 'sports', name: 'Sports', iconUrl: 'https://imgs.search.brave.com/pU6LvMRkvej2CA4N9SY8W3qxsM7p_VgT2N-1rDVNz5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tLzIwMjQvYW5p/bWF0ZWQtc3BvcnRz/LWNsaXBhcnQvYW5p/bWF0ZWQtc3BvcnRz/LWNsaXBhcnQtOS5q/cGc' },
];

// Grid categories (Grocery & Kitchen section)
export const groceryCategories: Category[] = [
  { id: 'g1', name: 'Fruits &\nVegetables', iconUrl: 'https://picsum.photos/seed/fruitsvegs/200' },
  { id: 'g2', name: 'Dairy, Bread\n& Eggs', iconUrl: 'https://picsum.photos/seed/dairy/200' },
  { id: 'g3', name: 'Atta, Rice,\nOil & Dals', iconUrl: 'https://picsum.photos/seed/staples/200' },
  { id: 'g4', name: 'Meat, Fish\n& Eggs', iconUrl: 'https://picsum.photos/seed/meat/200' },
  { id: 'g5', name: 'Masala &\nDry Fruits', iconUrl: 'https://picsum.photos/seed/masala/200' },
  { id: 'g6', name: 'Breakfast\n& Sauces', iconUrl: 'https://picsum.photos/seed/breakfast/200' },
  { id: 'g7', name: 'Packaged\nFood', iconUrl: 'https://picsum.photos/seed/packaged/200' },
  { id: 'g8', name: 'Snacks &\nMunchies', iconUrl: 'https://picsum.photos/seed/snacks2/200' },
];

// Keep the original for backward compat (used by CategoryRow if still referenced)
export const categories: Category[] = tabCategories;