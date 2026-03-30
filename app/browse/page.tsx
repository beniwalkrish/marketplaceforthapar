'use client';

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import ListingCard from '@/components/ListingCard';
import { Listing, User, Category } from '@/types';
import { getCategories } from '@/lib/helpers';
import clsx from 'clsx';

const mockSeller: User = {
  id: '1',
  email: 'john@thapar.edu',
  name: 'John Doe',
  branch: 'CSE',
  year: 3,
  whatsapp: '+919876543210',
  avatar_url: null,
  is_verified: true,
  rating: 4.8,
  created_at: new Date().toISOString(),
};

const mockListings: Listing[] = [
  {
    id: '1',
    user_id: '1',
    title: 'Python Programming Book',
    description: 'Complete guide',
    price: 299,
    category: 'books',
    condition: 'like_new',
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop'],
    location_on_campus: 'Hostel 3',
    whatsapp: '+919876543210',
    is_boosted: true,
    boost_expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    is_sold: false,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    user_id: '1',
    title: 'HP Laptop - Gaming Ready',
    description: 'RTX 3050',
    price: 45000,
    category: 'electronics',
    condition: 'good',
    images: ['https://images.unsplash.com/photo-1588872657840-c541307921d7?w=400&h=300&fit=crop'],
    location_on_campus: 'Main Gate',
    whatsapp: '+919876543210',
    is_boosted: false,
    boost_expires_at: null,
    is_sold: false,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
];

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState<'newest' | 'price_low' | 'price_high'>('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = getCategories();

  const filteredListings = mockListings.filter((listing) => {
    if (selectedCategory && listing.category !== selectedCategory) return false;
    if (listing.price < minPrice || listing.price > maxPrice) return false;
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === 'price_low') return a.price - b.price;
    if (sortBy === 'price_high') return b.price - a.price;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search listings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-white rounded-lg border-2 border-slate-200 focus:outline-none focus:border-accent text-lg"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={clsx('lg:block', mobileFiltersOpen ? 'block' : 'hidden')}>
            <div className="bg-white rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between lg:hidden">
                <h3 className="font-heading font-bold text-lg">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-slate-900 mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={clsx(
                      'block w-full text-left px-3 py-2 rounded-lg transition-colors',
                      selectedCategory === null ? 'bg-accent text-white' : 'hover:bg-slate-100'
                    )}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={clsx(
                        'block w-full text-left px-3 py-2 rounded-lg transition-colors',
                        selectedCategory === cat.value ? 'bg-accent text-white' : 'hover:bg-slate-100'
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-slate-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-slate-600">Min: ₹{minPrice}</label>
                    <input type="range" min="0" max="100000" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="w-full" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Max: ₹{maxPrice}</label>
                    <input type="range" min="0" max="100000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-slate-900 mb-3">Sort By</h4>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="newest">Newest First</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200">
              <Filter className="w-4 h-4" />
              Filters
            </button>

            <div className="mb-6">
              <p className="text-slate-600">
                Showing <span className="font-semibold text-primary-900">{sortedListings.length}</span> listings
              </p>
            </div>

            {sortedListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sortedListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} seller={mockSeller} isWishlisted={false} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-heading font-bold text-primary-900 mb-2">No listings found</h3>
                <p className="text-slate-600 mb-6">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
