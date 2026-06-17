import { Banner } from '@/types';

// Placeholder images via picsum so the carousel has real network
// images to load/transition between. Swap imageUrl values for
// real assets or a CMS-driven banner API later.

export const banners: Banner[] = [
  {
    id: 'banner-1',
    imageUrl: 'https://imgs.search.brave.com/esQqBH-uV-fM4SzRUqdjPa92EI6pLGHVwjc_i4f1aUk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9Hcm9j/ZXJpZXMtVHJhbnNw/YXJlbnQtSW1hZ2Vz/LVBORy5wbmc',
    title: 'Flat 50% Off',
    subtitle: 'On your first order',
    backgroundColor: '#F3E8FF',
  },
  {
    id: 'banner-2',
    imageUrl: 'https://imgs.search.brave.com/-ALwKowJn5G1GVO8IKtERbIIC7-REIJ9mmzX1yhL1Ow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/NjI5LzEwNC9zbWFs/bC9mcnVpdC1pbi1i/YXNrZXQtYWxsLWZy/dWl0cy1pbi1wbmcu/cG5n',
    title: 'Fresh Fruits',
    subtitle: 'Starting at ₹29',
    backgroundColor: '#E8F5E9',
  },
  {
    id: 'banner-3',
    imageUrl: 'https://imgs.search.brave.com/OBty26lU2Fkwf8_S4-6-wQE_GgdZV918PcmrynFRIfE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NjQ2Lzc3OS9zbWFs/bC92YXJpb3VzLWRh/aXJ5LXByb2R1Y3Rz/LWluY2x1ZGluZy1t/aWxrLWNoZWVzZS1h/bmQtYnV0dGVyLXBu/Zy5wbmc',
    title: 'Dairy & Breakfast',
    subtitle: 'Up to 30% off',
    backgroundColor: '#FFF3E0',
  },
  {
    id: 'banner-4',
    imageUrl: 'https://imgs.search.brave.com/Tk7tQcSKIobfbfA8efyzGsvGMpxmypwGIa8w-N9L7OE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYXNz/b3J0ZWQtY29sZC1k/cmlua3MtY29sbGVj/dGlvbi1razQ4c3p5/emZrNG9lZDU1LnBu/Zw',
    title: 'Snacks Sale',
    subtitle: 'Buy 1 Get 1 Free',
    backgroundColor: '#FFEBEE',
  },
];
