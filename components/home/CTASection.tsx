'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Join thousands of creators and discover the power of community-driven prompts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/signup"
            className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 group transition-smooth"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/explore"
            className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-smooth"
          >
            Explore Library
          </Link>
        </div>
      </div>
    </section>
  );
}
