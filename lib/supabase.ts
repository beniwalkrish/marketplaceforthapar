import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth functions
export async function signUpUser(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) throw error;
  return data;
}

export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

// Listing functions
export async function createListing(listing: any, userId: string) {
  const { data, error } = await supabase
    .from('listings')
    .insert([{ ...listing, user_id: userId }])
    .select();

  if (error) throw error;
  return data;
}

export async function getListings(limit = 20) {
  const { data, error } = await supabase
    .from('listings')
    .select('*, user:users(name, rating, is_verified, avatar_url)')
    .eq('is_sold', false)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function getListingById(id: string) {
  const { data, error } = await supabase
    .from('listings')
    .select('*, user:users(name, rating, is_verified, avatar_url, whatsapp)')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function getUserListings(userId: string) {
  const { data, error } = await supabase
    .from('listings')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

// User functions
export async function createUserProfile(userId: string, userData: any) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ id: userId, ...userData }])
    .select();

  if (error) throw error;
  return data;
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}
