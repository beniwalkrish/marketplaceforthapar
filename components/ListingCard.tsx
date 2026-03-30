'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Listing, User } from '@/types';
import { formatPrice, timeAgo, getCategoryLabel, getConditionColor, getConditionLabel } from '@/lib/helpers';
import clsx from 'clsx';

interface ListingCardProps {
  listing: Listing;
  seller: User;
  isWishlisted?: boolean;
  onWishlistToggle?: () => void;
}

export default function ListingCard({
  listing,
  seller,
  isWishlisted,
  onWishlistToggle,
}: ListingCardProps) {
  const imageUrl = listing.images?.[0] || '/placeholder.jpg';

  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-elevated transition-all duration-300 hover:scale-105 cursor-pointer">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
          <Image
            src={imageUrl}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Boosted Badge */}
          {listing.is_boosted && (
            <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              👑 Boosted
            </div>
          )}

          {/* Sold Badge */}
          {listing.is_sold && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-xl font-bold">SOLD</span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onWishlistToggle?.();
            }}
            className={clsx(
              'absolute top-3 left-3 p-2 rounded-full transition-colors',
              isWishlisted
                ? 'bg-accent text-white'
                : 'bg-white/80 text-slate-600 hover:bg-white'
            )}
          >
            <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-heading font-semibold text-primary-900 line-clamp-2 mb-2">
            {listing.title}
          </h3>

          {/* Category & Condition */}
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="inline-block text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
              {getCategoryLabel(listing.category)}
            </span>
            <span className={clsx('inline-block text-xs px-2 py-1 rounded-md', getConditionColor(listing.condition))}>
              {getConditionLabel(listing.condition)}
            </span>
          </div>

          {/* Price */}
          <p className="text-lg sm:text-xl font-heading font-bold text-accent mb-3">
            {formatPrice(listing.price)}
          </p>

          {/* Seller Info */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white text-xs font-bold">
                {seller.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-slate-700 truncate">
                  {seller.name}
                </p>
                <p className="text-xs text-slate-500">{timeAgo(listing.created_at)}</p>
              </div>
            </div>
            {seller.is_verified && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                ✓ Verified
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
