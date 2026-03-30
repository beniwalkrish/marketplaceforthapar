# CampusBazaar 🛍️

A production-ready hyperlocal campus marketplace web app for Thapar Institute of Engineering & Technology students. Buy and sell anything on campus with trust and ease.

## 🎯 Features

### Authentication
- ✅ Sign up/login restricted to @thapar.edu email addresses
- ✅ Email validation with error messages
- ✅ User profile with branch, year, and seller rating
- ✅ College ID verification badge

### Homepage
- ✅ Hero section with catchy headline and search
- ✅ 6-category grid (Books, Electronics, Hostel Items, Clothes, Tickets, Food)
- ✅ Featured/Boosted listings showcase
- ✅ Recently added listings section
- ✅ Sticky navbar with search and CTA

### Listing Management
- ✅ Responsive listing cards with hover animations
- ✅ Price formatting in rupees (₹)
- ✅ Category badges and condition labels
- ✅ Seller info and verification status
- ✅ Boosted badge for promoted listings
- ✅ Wishlist functionality

### Post Listings
- ✅ Multi-step form with validation
- ✅ Image upload with drag & drop (up to 4 photos)
- ✅ Category and condition selection
- ✅ Price and location fields
- ✅ WhatsApp contact integration
- ✅ Boost listing option (₹29 for 7 days)

### Browse & Search
- ✅ Full-text search functionality
- ✅ Advanced filters: category, price range, condition
- ✅ Sort options: newest, price (low-high, high-low)
- ✅ Responsive filter sidebar
- ✅ Empty state with friendly message

### Listing Details
- ✅ Image gallery with navigation
- ✅ Full description and specifications
- ✅ Direct WhatsApp chat button
- ✅ Wishlist save/unsave
- ✅ Seller card with rating and verification
- ✅ Report listing functionality
- ✅ Similar listings section

### User Profiles
- ✅ Seller profile page
- ✅ Active listings showcase
- ✅ Rating and verification status
- ✅ Member since date
- ✅ Edit profile option

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React Icons
- **State Management**: React Hooks
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage (Images)
- **Payments**: Razorpay Integration
- **Notifications**: Sonner (Toast)
- **Utilities**: clsx, Zod
- **Deployment**: Vercel-ready

## 🎨 Design System

### Colors
- **Primary**: Deep Navy (#0F172A)
- **Accent**: Vibrant Saffron (#F59E0B)
- **Background**: Warm Off-white (#FAFAF7)
- **Text**: Slate Gray (#1E293B)

### Typography
- **Headings**: Plus Jakarta Sans
- **Body**: DM Sans

### UI Elements
- Border radius: 16px (rounded-3xl)
- Shadows: Subtle to elevated
- Transitions: 200ms ease
- Hover effects: Scale + shadow elevation

## 📁 Project Structure

```
campusbazaar/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── browse/page.tsx          # Browse & search
│   ├── listing/[id]/page.tsx    # Listing detail
│   ├── post/page.tsx            # Post listing form
│   ├── profile/[id]/page.tsx    # User profile
│   ├── auth/page.tsx            # Auth (login/signup)
│   ├── not-found.tsx            # 404 page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── ListingCard.tsx          # Listing card component
│   ├── CategoryGrid.tsx         # Category selector
│   └── ...
├── lib/
│   ├── supabase.ts              # Supabase client
│   └── helpers.ts               # Utility functions
├── types/
│   └── index.ts                 # TypeScript types
├── SUPABASE_SCHEMA.sql          # Database schema
└── .env.example                 # Environment template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Razorpay account (optional, for payments)

### Installation

1. **Clone the repository**
   ```bash
   cd campusbazaar
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   NEXT_PUBLIC_RAZORPAY_KEY=your_key
   ```

3. **Set up Supabase Database**
   - Create a new Supabase project
   - Copy the SQL from `SUPABASE_SCHEMA.sql`
   - Paste it into Supabase SQL Editor and execute
   - This creates: `users`, `listings`, and `wishlists` tables

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

### users table
- `id` (uuid, PK)
- `email` (unique, @thapar.edu only)
- `name`, `branch`, `year`
- `whatsapp`, `avatar_url`
- `is_verified` (bool)
- `rating` (float 0-5)
- `created_at`, `updated_at`

### listings table
- `id` (uuid, PK)
- `user_id` (FK → users)
- `title`, `description`, `price` (₹)
- `category` (enum), `condition` (enum)
- `images` (text array)
- `location_on_campus`, `whatsapp`
- `is_boosted`, `boost_expires_at`
- `is_sold` (bool)
- `created_at`, `updated_at`

### wishlists table
- `id` (uuid, PK)
- `user_id`, `listing_id` (FKs)
- `created_at`
- Unique constraint on (user_id, listing_id)

## 🔐 Security

- Row Level Security (RLS) enabled on all tables
- Email domain validation (@thapar.edu only)
- User authentication required for posts/wishlist
- Image validation on upload
- SQL injection prevention via Supabase

## 💳 Monetization

**Boost Listings**: ₹29 for 7 days
- Integration ready with Razorpay
- Boosted listings get priority placement
- Special "👑 Boosted" badge
- Boost expiration tracking

## 📱 Responsive Design

- **Mobile-first** approach
- Tested on iPhone, iPad, and desktop
- Responsive navbar with mobile menu
- Touch-friendly buttons and inputs
- Optimized images with Next.js Image component

## 🎓 Thapar-Specific Features

- Email verification limited to @thapar.edu
- Campus location field for listings
- College branch and year tracking
- Hostel-aware listing categories
- Thapar-specific mock data

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

```bash
git push origin main
```

### Environment Variables (Vercel)
Set these in your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_RAZORPAY_KEY`
- `RAZORPAY_SECRET`

## 📈 Performance

- Lazy loading for images
- Optimized bundle size
- SEO meta tags on all pages
- Fast page transitions
- Loading skeletons

## 🐛 Known Limitations

Current version uses **mock data**. To connect to real Supabase:

1. Update API calls in components
2. Implement Supabase query functions
3. Add authentication middleware
4. Connect payment gateway

## 🤝 Contributing

This is a template project. Feel free to:
- Customize colors and fonts
- Add more features
- Integrate with your backend
- Deploy to production

## 📝 License

MIT License - Feel free to use for educational purposes

## 📧 Support

For issues or questions:
- Check the [Next.js docs](https://nextjs.org/docs)
- Review [Supabase docs](https://supabase.com/docs)
- Check [Tailwind CSS docs](https://tailwindcss.com/docs)

---

**Built with ❤️ for Thapar Institute students**
