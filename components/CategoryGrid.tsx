'use client';

import Link from 'next/link';
import { Category } from '@/types';

const categories: { value: Category; label: string; emoji: string }[] = [
  { value: 'books', label: 'Books & Notes', emoji: '📚' },
  { value: 'electronics', label: 'Electronics', emoji: '💻' },
  { value: 'hostel', label: 'Hostel Items', emoji: '🛏️' },
  { value: 'clothes', label: 'Clothes', emoji: '👕' },
  { value: 'tickets', label: 'Event Tickets', emoji: '🎫' },
  { value: 'food', label: 'Food & Tiffin', emoji: '🍽️' },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {categories.map((category) => (
        <Link key={category.value} href={`/browse?category=${category.value}`}>
          <div className="bg-white rounded-3xl p-4 sm:p-6 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-accent">
            <div className="text-3xl sm:text-4xl mb-2">{category.emoji}</div>
            <p className="text-xs sm:text-sm font-heading font-semibold text-primary-900">
              {category.label}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
