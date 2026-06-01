'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary-600 hover:text-primary-700 transition-colors">
            <Sparkles className="w-6 h-6" />
            <span>PromptVault</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-secondary-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="text-secondary-700 hover:text-primary-600 transition-colors font-medium"
            >
              Explore
            </Link>
            <Link
              href="/auth/login"
              className="btn-secondary px-6 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="btn-primary px-6 py-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block px-4 py-2 text-secondary-700 hover:bg-secondary-100 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="block px-4 py-2 text-secondary-700 hover:bg-secondary-100 rounded-lg transition-colors"
            >
              Explore
            </Link>
            <div className="space-y-2 pt-2 border-t border-secondary-200">
              <Link
                href="/auth/login"
                className="block px-4 py-2 text-center text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block px-4 py-2 text-center btn-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
