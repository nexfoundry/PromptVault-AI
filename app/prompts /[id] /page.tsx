'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Copy, Heart, Share2, Star } from 'lucide-react';

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
  content: `You are a creative writing assistant designed to help writers overcome writer's block and generate engaging content.`,
  category: 'Writing',
  author: 'John Doe',
  rating: 4.8,
  views: 1234,
  likes: 342,
  createdAt: '2024-01-15',
  tags: ['writing', 'creative', 'storytelling', 'ai-assistant'],
};

export default function PromptDetailPage() {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(mockPrompt.content);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/explore"
          className="flex items-center gap-2 mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          {mockPrompt.title}
        </h1>

        <p className="mb-6">
          {mockPrompt.description}
        </p>

        <div className="flex gap-4 mb-6 flex-wrap">
          <span className="flex items-center gap-1">
            <Star size={16} />
            {mockPrompt.rating}
          </span>

          <span>{mockPrompt.views} views</span>
          <span>{mockPrompt.author}</span>
        </div>

        <div className="mb-6">
          {mockPrompt.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block border rounded px-2 py-1 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="border rounded-lg p-6 mb-6">
          <pre className="whitespace-pre-wrap">
            {mockPrompt.content}
          </pre>
        </div>

        <div className="flex gap-3 mb-8">
          <button
            onClick={copyPrompt}
            className="border rounded px-4 py-2 flex items-center gap-2"
          >
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy'}
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className="border rounded px-4 py-2 flex items-center gap-2"
          >
            <Heart
              size={16}
              fill={liked ? 'currentColor' : 'none'}
            />
            Like
          </button>

          <button
            className="border rounded px-4 py-2 flex items-center gap-2"
          >
            <Share2 size={16} />
            Share
          </button>
        </div>

      </div>
    </main>
  );
}
