'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MapPin, Phone, Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Listing, User } from '@/types';
import { formatPrice, timeAgo, getCategoryLabel, getConditionLabel } from '@/lib/helpers';
import clsx from 'clsx';

const mockListing: Listing = {
  id: '1',
  user_id: '1',
  title: 'HP Pavilion Laptop - Perfect for College',
  description: 'Used HP Pavilion laptop in excellent condition. Barely used, kept in case throughout. Perfect for gaming and development. Specs: Intel i5-11th Gen, 8GB RAM, 512GB SSD, RTX 3050.',
  price: 45000,
  category: 'electronics',
  condition: 'good',
  images: [
    'https://images.unsplash.com/photo-1588872657840-c541307921d7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1587829191301-6a2f1b696156?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
  ],
  location_on_campus: 'Hostel 4, Room 205',
  whatsapp: '+919876543210',
  is_boosted: false,
  boost_expires_at: null,
  is_sold: false,
  created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
};

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

export default function ListingDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? mockListing.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === mockListing.images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = mockListing.images[currentImageIndex];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/browse" className="flex items-center gap-2 text-accent hover:text-orange-500 mb-6 font-semibold">
          <ChevronLeft className="w-4 h-4" />
          Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg mb-4">
              <Image src={currentImage} alt={mockListing.title} width={800} height={600} className="w-full h-auto object-cover" priority />
              {mockListing.images.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {mockListing.images.map((image, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} className={clsx('flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all', currentImageIndex === index ? 'border-accent' : 'border-slate-200')}>
                  <Image src={image} alt={`${index + 1}`} width={80} height={80} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-6 shadow-md sticky top-24">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-heading font-bold text-primary-900 mb-2">{mockListing.title}</h1>
                  <p className="text-slate-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {mockListing.location_on_campus}
                  </p>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={clsx('p-3 rounded-full transition-colors', isWishlisted ? 'bg-accent text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{getCategoryLabel(mockListing.category)}</span>
                <span className="inline-block text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">{getConditionLabel(mockListing.condition)}</span>
                <span className="inline-block text-xs text-slate-500">Posted {timeAgo(mockListing.created_at)}</span>
              </div>

              <div className="mb-6 pb-6 border-b-2 border-slate-100">
                <p className="text-4xl font-heading font-bold text-accent mb-2">{formatPrice(mockListing.price)}</p>
                {mockListing.is_boosted && <p className="text-sm text-green-600 font-semibold">👑 Boosted - Featured Listing</p>}
              </div>

              <div className="space-y-3 mb-6">
                <a href={`https://wa.me/${mockListing.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in "${mockListing.title}"`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-heading font-bold">
                  <Phone className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button className="w-full px-4 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-heading font-bold">
                  Save to Wishlist
                </button>
              </div>

              <button className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1">
                <Flag className="w-4 h-4" />
                Report this listing
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h2 className="text-2xl font-heading font-bold text-primary-900 mb-4">About this listing</h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{mockListing.description}</p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">Seller Information</h3>

              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
                  {mockSeller.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary-900">{mockSeller.name}</p>
                  <p className="text-sm text-slate-600">{mockSeller.branch} • Year {mockSeller.year}</p>
                  <div className="flex items-center gap-1 text-sm text-yellow-500 font-semibold mt-1">
                    ★ {mockSeller.rating} Rating
                  </div>
                </div>
              </div>

              {mockSeller.is_verified && (
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <p className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                    ✓ College ID Verified
                  </p>
                </div>
              )}

              <Link href={`/profile/${mockSeller.id}`} className="block w-full px-4 py-2 text-center bg-slate-100 text-primary-900 rounded-lg hover:bg-slate-200 transition-colors font-heading font-semibold mb-3">
                View Profile
              </Link>

              <a href={`https://wa.me/${mockSeller.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-2 text-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-heading font-semibold">
                Contact Seller
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">Similar Listings</h2>
          <div className="bg-white rounded-3xl p-8 shadow-md text-center py-16">
            <p className="text-slate-500">No similar listings found yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
