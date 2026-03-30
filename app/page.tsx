import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import CategoryGrid from '@/components/CategoryGrid';
import ListingCard from '@/components/ListingCard';
import { Listing, User } from '@/types';

// Mock data for demonstration
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
    title: 'Python Programming Book - Excellent Condition',
    description: 'Complete Python programming guide, barely used',
    price: 299,
    category: 'books',
    condition: 'like_new',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    ],
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
    description: 'Great for gaming and development. RTX 3050',
    price: 45000,
    category: 'electronics',
    condition: 'good',
    images: [
      'https://images.unsplash.com/photo-1588872657840-c541307921d7?w=400&h=300&fit=crop',
    ],
    location_on_campus: 'Main Gate',
    whatsapp: '+919876543210',
    is_boosted: false,
    boost_expires_at: null,
    is_sold: false,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    user_id: '1',
    title: 'Hostel Bed Linen Set',
    description: 'Never used bed sheets and pillows set',
    price: 899,
    category: 'hostel',
    condition: 'new',
    images: [
      'https://images.unsplash.com/photo-1589373991356-82db3c6256bc?w=400&h=300&fit=crop',
    ],
    location_on_campus: 'Hostel 5',
    whatsapp: '+919876543210',
    is_boosted: false,
    boost_expires_at: null,
    is_sold: false,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    user_id: '1',
    title: 'Winter Jacket - Size L',
    description: 'Premium winter jacket, barely worn',
    price: 1299,
    category: 'clothes',
    condition: 'like_new',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=300&fit=crop',
    ],
    location_on_campus: 'Hostel 2',
    whatsapp: '+919876543210',
    is_boosted: false,
    boost_expires_at: null,
    is_sold: false,
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    user_id: '1',
    title: 'Concert Tickets - Thapar Fest',
    description: 'Two tickets for upcoming Thapar Fest concert',
    price: 599,
    category: 'tickets',
    condition: 'new',
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    ],
    location_on_campus: 'Any',
    whatsapp: '+919876543210',
    is_boosted: false,
    boost_expires_at: null,
    is_sold: false,
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '6',
    user_id: '1',
    title: 'Homemade Biryani - Fresh Daily',
    description: 'Authentic biryani delivery daily to your hostel',
    price: 150,
    category: 'food',
    condition: 'new',
    images: [
      'https://images.unsplash.com/photo-1584958267633-2f82a999d16e?w=400&h=300&fit=crop',
    ],
    location_on_campus: 'Hostels',
    whatsapp: '+919876543210',
    is_boosted: false,
    boost_expires_at: null,
    is_sold: false,
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-slate-900 to-primary-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
                Buy & Sell Anything on Campus
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8">
                CampusBazaar: The trusted marketplace for Thapar students. Buy books, electronics, hostel items, and more from fellow students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/browse"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-900 rounded-lg hover:bg-orange-400 transition-colors font-heading font-bold"
                >
                  Browse Listings
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/post"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-heading font-bold border border-white/30"
                >
                  Post Listing
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-orange-500/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-2">
            Browse by Category
          </h2>
          <p className="text-slate-600">Find exactly what you're looking for</p>
        </div>
        <CategoryGrid />
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-accent" />
              Featured Listings
            </h2>
            <p className="text-slate-600">Boosted listings trending on CampusBazaar</p>
          </div>
          <Link
            href="/browse"
            className="text-accent hover:text-orange-500 font-heading font-semibold flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.slice(0, 4).map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              seller={mockSeller}
              isWishlisted={false}
            />
          ))}
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-2">
            Recently Added
          </h2>
          <p className="text-slate-600">Fresh listings from your campus community</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              seller={mockSeller}
              isWishlisted={false}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Have Something to Sell?
          </h2>
          <p className="text-lg text-slate-200 mb-8">
            Join thousands of Thapar students selling on CampusBazaar. It only takes a minute to post your first listing!
          </p>
          <Link
            href="/post"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary-900 rounded-lg hover:bg-orange-400 transition-colors font-heading font-bold text-lg"
          >
            Post Your First Listing
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-heading font-bold mb-4">CampusBazaar</h3>
              <p className="text-sm">The trusted marketplace for Thapar students.</p>
            </div>
            <div>
              <h4 className="text-white font-heading font-semibold mb-4">Browse</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/browse" className="hover:text-white">All Listings</Link></li>
                <li><Link href="/browse?category=books" className="hover:text-white">Books</Link></li>
                <li><Link href="/browse?category=electronics" className="hover:text-white">Electronics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-heading font-semibold mb-4">Account</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/auth" className="hover:text-white">Sign In</Link></li>
                <li><Link href="/profile" className="hover:text-white">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-heading font-semibold mb-4">Help</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Safety Tips</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 CampusBazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
