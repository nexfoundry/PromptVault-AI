'use client';

import { useState } from 'react';
import { Copy, Heart, Share2, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PromptDetails {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  author: string;
  rating: number;
  views: number;
  likes: number;
  createdAt: string;
  tags: string[];
}

const mockPrompt: PromptDetails = {
  id: '1',
  title: 'Creative Writing Assistant',
  description:
    'Generate creative writing prompts and stories with this powerful AI assistant.',
  content: `You are a creative writing assistant designed to help writers overcome writer's block and generate engaging content. Your role is to:

1. Provide writing prompts based on the user's genre preference
2. Suggest plot twists and character development ideas
3. Help with dialogue writing and scene descriptions
4. Provide feedback on writing style and structure
5. Suggest improvements for better reader engagement

When responding:
- Be encouraging and supportive
- Provide detailed examples
- Ask clarifying questions to better understand the user's needs
- Offer multiple options when possible`,
  category: 'Writing',
  author: 'John Doe',
  rating: 4.8,
  views: 1234,
  likes: 342,
  createdAt: '2024-01-15',
  tags: ['writing', 'creative', 'storytelling', 'ai-assistant'],
};

export default function PromptDetailPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const prompt = mockPrompt;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/explore"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Explore
        </Link>

        <div className="card p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-2">
                {prompt.title}
              </h1>

              <p className="text-lg text-secondary-600 mb-4">
                {prompt.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1 text-secondary-600">
                  <Star className="w-4 h-4" />
                  {prompt.rating} ({prompt.views} views)
                </span>

                <span className="text-secondary-600">
                  By {prompt.author}
                </span>

                <span className="text-secondary-600">
                  {prompt.createdAt}
                </span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 sm:mt-0">
              <button
                onClick={handleLike}
                className="p-3 rounded-lg bg-secondary-100"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked ? 'fill-current text-red-500' : ''
                  }`}
                />
              </button>

              <button className="p-3 rounded-lg bg-secondary-100">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <span className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">
            {prompt.category}
          </span>
        </div>

        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Prompt Content
          </h2>

          <div className="bg-secondary-50 rounded-lg p-6 mb-4 border">
            <pre className="whitespace-pre-wrap text-sm">
              {prompt.content}
            </pre>
          </div>

          <button
            onClick={handleCopy}
            className="btn-primary flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {isCopied ? 'Copied!' : 'Copy Prompt'}
          </button>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-4">
            About the Author
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {prompt.author.charAt(0)}
            </div>

            <div>
              <p className="text-lg font-semibold">
                {prompt.author}
              </p>

              <p className="text-secondary-600">
                Prompt Creator • {prompt.views} views across all prompts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}