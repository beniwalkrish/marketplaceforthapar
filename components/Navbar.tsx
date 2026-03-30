'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, Plus, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-900">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              CB
            </div>
            <span className="hidden sm:inline">CampusBazaar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 ml-8">
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full px-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/post"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-orange-500 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              Post Listing
            </Link>
            <Link
              href="/profile"
              className="p-2 text-primary-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary-900"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full px-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
            </div>
            <Link
              href="/post"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-orange-500 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              Post Listing
            </Link>
            <Link
              href="/profile"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-100 text-primary-900 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <User className="w-4 h-4" />
              My Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
