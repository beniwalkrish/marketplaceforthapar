'use client';

import Link from 'next/link';
import { ChevronLeft, Mail, MapPin, Star, Edit3 } from 'lucide-react';
import ListingCard from '@/components/ListingCard';
import { User, Listing } from '@/types';

const mockUser: User = {
  id: '1',
  email: 'john@thapar.edu',
  name: 'John Doe',
  branch: 'CSE',
  year: 3,
  whatsapp: '+919876543210',
  avatar_url: null,
  is_verified: true,
  rating: 4.8,
  created_at: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
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

export default function ProfilePage() {
  const memberSince = new Date(mockUser.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/browse" className="flex items-center gap-2 text-accent hover:text-orange-500 mb-6 font-semibold">
          <ChevronLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-md mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white text-5xl font-bold">
              {mockUser.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-heading font-bold text-primary-900">{mockUser.name}</h1>
                {mockUser.is_verified && (
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-slate-600 mb-4">{mockUser.branch} • Year {mockUser.year}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {mockUser.email}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Member since {memberSince}
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-orange-500 transition-colors font-heading font-bold">
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="flex items-center gap-2 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(mockUser.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
              ))}
            </div>
            <span className="font-heading font-bold text-primary-900">{mockUser.rating}</span>
            <span className="text-slate-500">based on 24 reviews</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">Active Listings</h2>
          {mockListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} seller={mockUser} isWishlisted={false} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-heading font-bold text-primary-900 mb-2">No active listings</h3>
              <p className="text-slate-600">This user hasn't posted any listings yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
