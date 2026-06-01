import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'PromptVault AI - Share & Discover Amazing AI Prompts',
  description: 'A production-ready prompt management and sharing platform. Discover, create, and share powerful AI prompts with the community.',
  keywords: ['AI', 'prompts', 'ChatGPT', 'LLM', 'community', 'sharing'],
  authors: [{ name: 'PromptVault Team' }],
  creator: 'PromptVault AI',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://promptvault.ai',
    siteName: 'PromptVault AI',
    title: 'PromptVault AI - Share & Discover Amazing AI Prompts',
    description: 'Discover, create, and share powerful AI prompts with the community.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
