'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import PromptCard from '@/components/prompts/PromptCard';

interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  rating: number;
  views: number;
}

// Mock data - Replace with actual data fetching from Supabase
const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Creative Writing Assistant',
    description: 'Generate creative writing prompts and stories with this powerful AI assistant.',
    category: 'Writing',
    author: 'John Doe',
    rating: 4.8,
    views: 1234,
  },
  {
    id: '2',
    title: 'Code Generation Expert',
    description: 'Get help with code generation and debugging using advanced prompts.',
    category: 'Programming',
    author: 'Jane Smith',
    rating: 4.9,
    views: 2156,
  },
  {
    id: '3',
    title: 'Business Strategy Advisor',
    description: 'Strategic business advice and planning assistance from AI experts.',
    category: 'Business',
    author: 'Bob Wilson',
    rating: 4.7,
    views: 890,
  },
  {
    id: '4',
    title: 'Language Learning Coach',
    description: 'Interactive language learning with personalized AI coaching.',
    category: 'Education',
    author: 'Alice Johnson',
    rating: 4.6,
    views: 1567,
  },
  {
    id: '5',
    title: 'SEO Optimization Guide',
    description: 'Master SEO with comprehensive AI-powered optimization techniques.',
    category: 'Marketing',
    author: 'Charlie Brown',
    rating: 4.8,
    views: 2341,
  },
  {
    id: '6',
    title: 'Data Analysis Framework',
    description: 'Analyze and visualize data effectively with structured prompts.',
    category: 'Data Science',
    author: 'Diana Prince',
    rating: 4.9,
    views: 1876,
  },
];

const categories = [
  'All',
  'Writing',
  'Programming',
  'Business',
  'Education',
  'Marketing',
  'Data Science',
];

export default function ExplorePage() {
  const [prompts, setPrompts] = useState<Prompt[]>(mockPrompts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrompts, setFilteredPrompts] = useState(mockPrompts);

  useEffect(() => {
    let filtered = prompts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPrompts(filtered);
  }, [selectedCategory, searchQuery, prompts]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Explore Prompts
          </h1>
          <p className="text-lg text-secondary-600">
            Discover thousands of amazing prompts shared by our community.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-secondary-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-base pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-secondary-600">
            Showing {filteredPrompts.length} of {prompts.length} prompts
          </p>
        </div>

        {/* Prompts Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <Link key={prompt.id} href={`/prompts/${prompt.id}`}>
                <PromptCard prompt={prompt} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <p className="text-lg text-secondary-600 mb-4">No prompts found.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
