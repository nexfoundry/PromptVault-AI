'use client';

import { Star, Eye, Heart } from 'lucide-react';

interface PromptCardProps {
  prompt: {
    id: string;
    title: string;
    description: string;
    category: string;
    author: string;
    rating: number;
    views: number;
  };
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="card p-6 hover:shadow-xl hover:scale-105 transition-smooth cursor-pointer">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
          {prompt.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-secondary-900 mb-2 line-clamp-2">
        {prompt.title}
      </h3>

      {/* Description */}
      <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
        {prompt.description}
      </p>

      {/* Author */}
      <div className="mb-4 pb-4 border-b border-secondary-200">
        <p className="text-sm text-secondary-500">By {prompt.author}</p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
            <span className="font-semibold text-secondary-900">{prompt.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-secondary-600">
            <Eye className="w-4 h-4" />
            <span>{prompt.views}</span>
          </div>
        </div>
        <button className="p-2 hover:bg-secondary-100 rounded-lg transition-smooth group">
          <Heart className="w-4 h-4 text-secondary-400 group-hover:text-error-500 transition-colors" />
        </button>
      </div>
    </div>
  );
}
