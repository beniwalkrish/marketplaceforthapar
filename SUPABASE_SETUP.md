# CampusBazaar - Supabase Setup Guide

## 🗄️ Database Setup Instructions

### Step 1: Create Supabase Account
1. Go to https://supabase.com
2. Sign up and create a new project
3. Copy your **Project URL** and **Anon Key**

### Step 2: Create Tables

Run these SQL queries in your Supabase SQL Editor:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  branch TEXT,
  year INTEGER,
  whatsapp TEXT,
  avatar_url TEXT,
  is_verified BOOLEAN DEFAULT false,
  rating FLOAT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Listings table
CREATE TABLE listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  category TEXT NOT NULL,
  condition TEXT,
  images TEXT[],
  location_on_campus TEXT,
  whatsapp TEXT,
  is_boosted BOOLEAN DEFAULT false,
  boost_expires_at TIMESTAMP,
  is_sold BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Wishlist table
CREATE TABLE wishlists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  listing_id UUID NOT NULL REFERENCES listings(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, listing_id)
);
```

### Step 3: Set Environment Variables

Copy your Supabase credentials to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Step 4: Enable Authentication

1. Go to Supabase Dashboard → Authentication
2. Enable Email/Password authentication
3. Configure email templates if needed

### Step 5: Set up RLS (Row Level Security)

```sql
-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can only read their own profile
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Enable RLS on listings table  
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

-- Anyone can read listings
CREATE POLICY "Anyone can view listings" ON listings
  FOR SELECT USING (true);

-- Users can only create/update their own listings
CREATE POLICY "Users can create their own listings" ON listings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own listings" ON listings
  FOR UPDATE USING (auth.uid() = user_id);
```

## 🔑 Features Implemented

✅ User Authentication (Sign Up/Sign In)  
✅ Supabase Database Integration  
✅ Thapar Email Validation  
✅ User Profiles (Branch, Year)  
✅ Listings Management  
✅ Wishlist Functionality  

## 🚀 How to Test Locally

1. Install dependencies:
```bash
npm install
```

2. Set up `.env.local` with Supabase credentials

3. Run development server:
```bash
npm run dev
```

4. Go to `http://localhost:3000/auth` to test login

## 📱 Database Schema

### Users Table
- `id` - UUID (Primary Key, from Auth)
- `email` - User's @thapar.edu email
- `name` - Full name
- `branch` - Engineering branch
- `year` - Year of study (1-4)
- `rating` - Average rating (0-5)
- `is_verified` - Badge status
- `avatar_url` - Profile picture URL
- `created_at`, `updated_at` - Timestamps

### Listings Table
- `id` - UUID (Primary Key)
- `user_id` - FK to users
- `title`, `description` - Item details
- `price` - In rupees
- `category` - books, electronics, etc.
- `condition` - new, like_new, good, fair
- `images` - Array of image URLs
- `is_sold` - Listing status
- `is_boosted` - Premium listing flag

## 🔗 Related Files

- `/lib/supabase.ts` - Supabase client & functions
- `/app/auth/page.tsx` - Login/Sign up page
- `/app/page.tsx` - Homepage (uses getListings)
- `/app/profile/[id]/page.tsx` - User profile
