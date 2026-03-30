<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# CampusBazaar - Custom Copilot Instructions

## Project Overview
CampusBazaar is a hyperlocal campus marketplace for Thapar Institute students. A production-ready Next.js 14 app using TypeScript, Tailwind CSS, and Supabase.

## Design System
- **Brand Colors**: 
  - Primary: Deep Navy (#0F172A)
  - Accent: Vibrant Saffron (#F59E0B)
  - Background: Warm Off-white (#FAFAF7)
  - Text: Slate Gray (#1E293B)

- **Typography**:
  - Headings: Plus Jakarta Sans
  - Body: DM Sans

- **UI Elements**:
  - Border radius: 16px (rounded-3xl in Tailwind)
  - Shadows: Subtle to elevated on hover
  - Transitions: 200ms ease

## Coding Standards
1. Use TypeScript throughout (strict mode)
2. Component structure: `/components` for reusable components
3. All API calls through Supabase client in `/lib/supabase.ts`
4. Use `clsx` for conditional styling
5. Implement error handling with toast notifications (Sonner)
6. Lazy load images with Next.js Image component
7. Fully responsive: mobile-first design
8. Use `@/` import alias for relative imports

## Authentication Rules
- Restricted to @thapar.edu email addresses only
- Validation function: `validateThaparEmail()` in helpers.ts
- Show error: "Only Thapar students can join CampusBazaar"
- User profile includes: name, branch, year, rating, verification badge

## Database: Supabase Schema

### users table
- id (uuid, PK)
- email (unique, must end in @thapar.edu)
- name, branch, year
- whatsapp, avatar_url
- is_verified (bool, default false)
- rating (float, default 0, 0-5)
- created_at, updated_at

### listings table
- id (uuid, PK)
- user_id (FK → users)
- title, description, price (rupees)
- category (enum: books, electronics, hostel, clothes, tickets, food)
- condition (enum: new, like_new, good, fair)
- images (text[])
- location_on_campus
- whatsapp
- is_boosted, boost_expires_at
- is_sold
- created_at, updated_at

### wishlists table
- id (uuid, PK)
- user_id, listing_id (FKs)
- created_at
- Unique constraint on (user_id, listing_id)

## Key Features to Maintain
1. Only Thapar email addresses allowed in auth
2. Listings can be boosted for ₹29 (7 days)
3. WhatsApp contact integration (wa.me links)
4. Wishlist functionality
5. Seller ratings and verification badges
6. Category-based browsing and filtering
7. Image gallery with swipe on mobile

## Pages & Routes
- `/` - Homepage with hero, categories, featured listings
- `/browse` - Search and filter listings
- `/listing/[id]` - Listing detail with gallery
- `/post` - Post new listing form with image upload
- `/profile/[id]` - User profile and listings
- `/auth` - Login/signup with Thapar email validation
- `/not-found` - 404 page

## UI/UX Guidelines
- Premium but approachable aesthetic (like Zepto/Meesho)
- Micro-animations: card scale on hover (group-hover:scale-105)
- Sticky navbar with blur backdrop (backdrop-blur-md)
- Loading skeletons while fetching
- Toast notifications for all user actions
- Empty states with friendly SVG illustrations
- 404 page with fun message
- SEO: proper meta tags on each page

## Component Naming Conventions
- PascalCase for React components
- Use 'use' prefix for custom hooks
- Use lowercase for utility functions

## Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_RAZORPAY_KEY=
RAZORPAY_SECRET=
NEXT_PUBLIC_APP_URL=
```

## Testing & Debugging
- Use mock data for testing (see page.tsx examples)
- Console log for debugging (remove in production)
- Verify Supabase connection before API calls
- Test email validation extensively

## Deployment
- Deploy to Vercel (Next.js optimized)
- Set environment variables in Vercel dashboard
- Enable automatic deployments from GitHub
- Monitor build logs and performance

## Performance Tips
- Use Next.js Image component for all images
- Implement lazy loading on listing cards
- Use dynamic imports for heavy components
- Optimize bundle size regularly
