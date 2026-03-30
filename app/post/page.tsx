'use client';

import { useState } from 'react';
import { ChevronLeft, Upload, X } from 'lucide-react';
import Link from 'next/link';
import { Category, Condition } from '@/types';
import { getCategories, getConditions, getBranches, getYears } from '@/lib/helpers';
import { toast } from 'sonner';
import clsx from 'clsx';

export default function PostListingPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: 'books' as Category,
    condition: 'good' as Condition,
    location_on_campus: '',
    whatsapp: '',
  });

  const [images, setImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = getCategories();
  const conditions = getConditions();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (images.length < 4) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          setImages((prev) => [...prev, result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    Array.from(files).forEach((file) => {
      if (images.length < 4 && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          setImages((prev) => [...prev, result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (images.length === 0) {
      toast.error('Please upload at least one image');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (isBoosted) {
        toast.success('Listing posted! Proceeding to payment...');
        // Redirect to payment
      } else {
        toast.success('Listing posted successfully!');
      }
    } catch (error) {
      toast.error('Failed to post listing');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="flex items-center gap-2 text-accent hover:text-orange-500 mb-6 font-semibold">
          <ChevronLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h1 className="text-4xl font-heading font-bold text-primary-900 mb-2">Post a New Listing</h1>
          <p className="text-slate-600 mb-8">Fill in the details below to list your item on CampusBazaar</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                Title <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., HP Laptop - Excellent Condition"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                maxLength={80}
              />
              <p className="text-xs text-slate-500 mt-1">{formData.title.length}/80 characters</p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                Description <span className="text-accent">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your item in detail. Include condition, brand, any defects, etc."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent resize-none h-32"
                maxLength={500}
              />
              <p className="text-xs text-slate-500 mt-1">{formData.description.length}/500 characters</p>
            </div>

            {/* Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                  Price (₹) <span className="text-accent">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0"
                  min="1"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                  Category <span className="text-accent">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Condition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                  Condition <span className="text-accent">*</span>
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                >
                  {conditions.map((cond) => (
                    <option key={cond.value} value={cond.value}>
                      {cond.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                  Location on Campus <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="location_on_campus"
                  value={formData.location_on_campus}
                  onChange={handleInputChange}
                  placeholder="e.g., Hostel 3, Room 205"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                WhatsApp Number <span className="text-accent">*</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-accent"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-heading font-semibold text-primary-900 mb-2">
                Photos <span className="text-accent">*</span> (Max 4)
              </label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={clsx(
                  'border-2 border-dashed rounded-lg p-8 text-center transition-colors',
                  isDragging ? 'border-accent bg-accent/5' : 'border-slate-300'
                )}
              >
                <Upload className="w-12 h-12 mx-auto text-slate-400 mb-2" />
                <p className="text-slate-600 font-medium mb-1">Drag photos here or click to select</p>
                <p className="text-xs text-slate-500 mb-4">PNG, JPG up to 5MB each</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageInput"
                />
                <label htmlFor="imageInput" className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors font-medium">
                  Browse Files
                </label>
              </div>

              {/* Image Previews */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    <img src={image} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Boost Toggle */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="boost"
                  checked={isBoosted}
                  onChange={(e) => setIsBoosted(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-accent"
                />
                <div className="flex-1">
                  <label htmlFor="boost" className="font-heading font-semibold text-primary-900 block mb-1 cursor-pointer">
                    👑 Boost this listing (₹29 for 7 days)
                  </label>
                  <p className="text-sm text-slate-600">
                    Get more visibility! Boosted listings appear at the top for 7 days and get a special badge.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={clsx(
                'w-full px-6 py-4 rounded-lg font-heading font-bold text-lg transition-all',
                isSubmitting
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-accent text-white hover:bg-orange-500'
              )}
            >
              {isSubmitting ? 'Posting...' : isBoosted ? 'Post & Pay ₹29 to Boost' : 'Post Listing'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
