'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-8 font-medium text-sm">
          <Sparkles className="w-4 h-4" />
          Welcome to PromptVault AI
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
          Share & Discover{' '}
          <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Amazing AI Prompts
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto mb-12">
          Build, share, and discover powerful AI prompts with the global community.
          Level up your AI interactions with carefully crafted, production-ready prompts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/explore" className="btn-primary px-8 py-3 text-lg inline-flex items-center justify-center gap-2 group">
            Explore Prompts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/auth/signup" className="btn-outline px-8 py-3 text-lg inline-flex items-center justify-center gap-2">
            Create Account
          </Link>
        </div>

        {/* Metrics */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-secondary-600 text-sm">
          <div>
            <span className="font-bold text-secondary-900">1K+</span> Community Prompts
          </div>
          <div>
            <span className="font-bold text-secondary-900">500+</span> Active Users
          </div>
          <div>
            <span className="font-bold text-secondary-900">100%</span> Open Source
          </div>
        </div>
      </div>
    </section>
  );
}
