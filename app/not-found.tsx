import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-slate-900 to-primary-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-heading font-bold text-accent mb-4">404</div>
        <h1 className="text-4xl font-heading font-bold text-white mb-4">Oops! Nothing Here</h1>
        <p className="text-xl text-slate-300 mb-8">
          Looks like this listing has been removed or doesn't exist. Let's get you back on track!
        </p>

        <div className="space-y-4">
          <Link
            href="/browse"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary-900 rounded-lg hover:bg-orange-400 transition-colors font-heading font-bold text-lg"
          >
            Browse Listings
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="text-6xl">🛍️</div>
        </div>
      </div>
    </div>
  );
}
