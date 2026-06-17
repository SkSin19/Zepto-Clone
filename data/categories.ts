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
  { id: 'g1', name: 'Fruits &\nVegetables', iconUrl: 'https://imgs.search.brave.com/PFQV9UMQoazlkMzX70rFmFvrvghZaShhBDdFXtsO-L4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDMv/NjU5LzczMy9zbWFs/bC9taXgtZnJ1aXRz/LW9uLWlzb2xhdGVk/LWJhY2tncm91bmQt/cG5nLnBuZw' },
  { id: 'g2', name: 'Dairy, Bread\n& Eggs', iconUrl: 'https://imgs.search.brave.com/OBty26lU2Fkwf8_S4-6-wQE_GgdZV918PcmrynFRIfE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NjQ2Lzc3OS9zbWFs/bC92YXJpb3VzLWRh/aXJ5LXByb2R1Y3Rz/LWluY2x1ZGluZy1t/aWxrLWNoZWVzZS1h/bmQtYnV0dGVyLXBu/Zy5wbmc' },
  { id: 'g3', name: 'Atta, Rice,\nOil & Dals', iconUrl: 'https://imgs.search.brave.com/bGB9unjs5VpkDN5l4JoxNawzwJVmPGcmSpIgyDRCIbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/MzI2LzEyMS9zbWFs/bC9hLWJhZy1vZi1y/aWNlLXBuZy5wbmc' },
  { id: 'g4', name: 'Meat, Fish\n& Eggs', iconUrl: 'https://imgs.search.brave.com/Pbni0vYhg04XcQVoNJsb9O9_mLrIk3BWwsyT49qDavA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MzI1LzI5Ni9zbWFs/bC9yYXctY2hpY2tl/bi1tZWF0LWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtZmlsZS1j/dXQtb3V0LWFpLWdl/bmVyYXRlZC1wbmcu/cG5n' },
  { id: 'g5', name: 'Masala &\nDry Fruits', iconUrl: 'https://imgs.search.brave.com/XD8_YYjRL4lsG28dXmj3SHrLHrmldmz9CWFFULQwztQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYXNz/b3J0ZWQtZHJ5LWZy/dWl0cy1jb2xsZWN0/aW9uLXpmbDNrNnlp/M2Rhb3pxcTEtMi5w/bmc' },
  { id: 'g6', name: 'Breakfast\n& Sauces', iconUrl: 'https://imgs.search.brave.com/gQ-XFQQqMcAQCSrInERPmLZJt8fliFCkq5J0g6VugG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTEvUmVk/LVNhdWNlLVBORy1E/b3dubG9hZC1JbWFn/ZS5wbmc' },
  { id: 'g7', name: 'Packaged\nFood', iconUrl: 'https://imgs.search.brave.com/8Uv9C8-uBqmE47Ogf4kP7H3ZYdRc6bFCzE3EZunBjZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/ODkyLzk4OC9zbWFs/bC9leHRyYW9yZGlu/YXJ5LXRyYWRpdGlv/bmFsLWJpb2RlZ3Jh/ZGFibGUtZm9vZC1j/b250YWluZXItd2l0/aC1jbGVhci1saWQt/cHJlbWl1bS1mcmVl/LXBuZy5wbmc' },
  { id: 'g8', name: 'Snacks &\nMunchies', iconUrl: 'https://imgs.search.brave.com/0ALfIn631cdMeEcLtaSJZHS3gCIc80nRSllBMLBhJQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/LmFpcXVpY2tkcmF3/LmNvbS9pbWdjb21w/cmVzc2VkL2ltZy9j/b21wcmVzc2VkX2Nk/YTFlYWRhODhlMzA5/M2QyZDM2Zjk3YmI0/M2E3YjViLndlYnA' },
];

// Keep the original for backward compat (used by CategoryRow if still referenced)
export const categories: Category[] = tabCategories;