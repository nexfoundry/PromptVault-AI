'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';

const features = [
  {
    icon: Sparkles,
    title: 'Discover Prompts',
    description: 'Browse thousands of carefully crafted prompts designed by experts and the community.',
  },
  {
    icon: Users,
    title: 'Share & Collaborate',
    description: 'Create and share your own prompts with the community and get feedback.',
  },
  {
    icon: Zap,
    title: 'Optimize & Improve',
    description: 'Use ratings and feedback to continuously improve your prompts and gain insights.',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection features={features} />
      
      {/* Quick Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1K+</div>
              <p className="text-secondary-600">Community Prompts</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-secondary-600">Active Users</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-secondary-600">Open Source</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
