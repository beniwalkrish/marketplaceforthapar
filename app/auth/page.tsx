'use client';

import { useState } from 'react';
import { Mail, Lock, User, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import clsx from 'clsx';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateThaparEmail = (email: string): boolean => {
    return email.toLowerCase().endsWith('@thapar.edu');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateThaparEmail(formData.email)) {
      toast.error('Only Thapar students can join CampusBazaar. Please use your @thapar.edu email address.');
      return;
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(isSignUp ? 'Account created successfully!' : 'Logged in successfully!');
      // Redirect to home
    } catch (error) {
      toast.error('Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-slate-900 to-primary-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              CB
            </div>
            <span className="text-2xl font-heading font-bold text-primary-900">CampusBazaar</span>
          </div>

          <h1 className="text-3xl font-heading font-bold text-primary-900 text-center mb-2">
            {isSignUp ? 'Join CampusBazaar' : 'Welcome Back'}
          </h1>
          <p className="text-center text-slate-600 mb-8">
            {isSignUp
              ? 'Create your account with your Thapar email'
              : 'Sign in to your CampusBazaar account'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sign Up Fields */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full pl-12 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@thapar.edu"
                  className="w-full pl-12 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Only @thapar.edu email addresses are allowed
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-12 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Confirm Password */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-12 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={clsx(
                'w-full py-3 rounded-lg font-heading font-bold text-lg transition-all mt-6',
                isLoading
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-accent text-white hover:bg-orange-500'
              )}
            >
              {isLoading ? 'Loading...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            {/* Toggle Sign Up/In */}
            <div className="text-center mt-6">
              <p className="text-slate-600 text-sm">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
                  }}
                  className="text-accent font-heading font-bold hover:text-orange-500 ml-2"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </form>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8 text-sm text-blue-800">
            <p className="font-heading font-semibold mb-1">Only Thapar Students</p>
            <p>CampusBazaar is exclusively for Thapar Institute of Engineering & Technology students. Sign up with your official @thapar.edu email address.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
