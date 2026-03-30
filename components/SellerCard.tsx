'use client';

import Link from 'next/link';
import { Star, Mail, Phone } from 'lucide-react';
import { User } from '@/types';

interface SellerCardProps {
  seller: User;
}

export default function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md">
      <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">Seller Information</h3>

      {/* Avatar & Name */}
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
          {seller.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading font-bold text-primary-900">{seller.name}</p>
          <p className="text-sm text-slate-600">{seller.branch} • Year {seller.year}</p>
          <div className="flex items-center gap-1 text-sm text-yellow-500 font-semibold mt-1">
            ★ {seller.rating} Rating
          </div>
        </div>
      </div>

      {/* Verification Badge */}
      {seller.is_verified && (
        <div className="mb-6 pb-6 border-b border-slate-200">
          <p className="flex items-center gap-2 text-sm text-green-600 font-semibold">
            ✓ College ID Verified
          </p>
        </div>
      )}

      {/* Contact Methods */}
      <div className="space-y-3">
        <Link
          href={`/profile/${seller.id}`}
          className="block w-full px-4 py-2 text-center bg-slate-100 text-primary-900 rounded-lg hover:bg-slate-200 transition-colors font-heading font-semibold"
        >
          View Profile
        </Link>

        <a
          href={`https://wa.me/${seller.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-heading font-semibold"
        >
          <Phone className="w-4 h-4" />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
