import { Category, Condition } from '@/types';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const timeAgo = (date: string): string => {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval}y ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval}mo ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval}d ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval}h ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval}m ago`;

  return 'just now';
};

export const getCategoryLabel = (category: Category): string => {
  const labels: Record<Category, string> = {
    books: '📚 Books & Notes',
    electronics: '💻 Electronics',
    hostel: '🛏️ Hostel Items',
    clothes: '👕 Clothes',
    tickets: '🎫 Event Tickets',
    food: '🍽️ Food & Tiffin',
  };
  return labels[category];
};

export const getConditionLabel = (condition: Condition): string => {
  const labels: Record<Condition, string> = {
    new: 'Brand New',
    like_new: 'Like New',
    good: 'Good',
    fair: 'Fair',
  };
  return labels[condition];
};

export const getConditionColor = (condition: Condition): string => {
  const colors: Record<Condition, string> = {
    new: 'bg-green-100 text-green-800',
    like_new: 'bg-blue-100 text-blue-800',
    good: 'bg-yellow-100 text-yellow-800',
    fair: 'bg-orange-100 text-orange-800',
  };
  return colors[condition];
};

export const validateThaparEmail = (email: string): boolean => {
  return email.toLowerCase().endsWith('@thapar.edu');
};

export const getBranches = (): string[] => {
  return [
    'CSE',
    'ECE',
    'EEE',
    'ME',
    'CE',
    'BioTech',
    'EEE-Power',
    'Other',
  ];
};

export const getYears = (): number[] => {
  return [1, 2, 3, 4];
};

export const getCategories = (): { value: Category; label: string }[] => {
  return [
    { value: 'books', label: '📚 Books & Notes' },
    { value: 'electronics', label: '💻 Electronics' },
    { value: 'hostel', label: '🛏️ Hostel Items' },
    { value: 'clothes', label: '👕 Clothes' },
    { value: 'tickets', label: '🎫 Event Tickets' },
    { value: 'food', label: '🍽️ Food & Tiffin' },
  ];
};

export const getConditions = (): { value: Condition; label: string }[] => {
  return [
    { value: 'new', label: 'Brand New' },
    { value: 'like_new', label: 'Like New' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
  ];
};
