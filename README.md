# PromptVault AI 🚀

A production-ready prompt management and sharing platform built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## 🌟 Features

- **Discover Prompts**: Browse thousands of AI prompts from the community
- **Share & Collaborate**: Create and share your own prompts with detailed descriptions
- **Rate & Review**: Rate prompts and leave comments to help the community
- **Search & Filter**: Powerful search and categorization system
- **User Authentication**: Secure authentication with Supabase
- **Responsive Design**: Mobile-first design that works on all devices
- **Production-Ready**: Built with best practices and performance optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL via Supabase
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Supabase account (free tier available at [supabase.com](https://supabase.com))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nexfoundry/PromptVault-AI.git
cd PromptVault-AI
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Copy the environment variables template:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 4. Set Up Database

1. Create a new project in Supabase
2. Copy the SQL from `supabase/schema.sql`
3. Execute the SQL in the Supabase SQL Editor to create tables and policies

### 5. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
PromptVault-AI/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── explore/           # Explore page
│   ├── prompts/           # Prompt detail pages
│   └── auth/              # Authentication pages (to be created)
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── home/             # Home page components
│   ├── prompts/          # Prompt-related components
│   └── auth/             # Auth components (to be created)
├── lib/                  # Utility functions and helpers
│   ├── supabase.ts       # Supabase client and helpers
│   └── types.ts          # TypeScript type definitions
├── supabase/             # Database schema and migrations
│   └── schema.sql        # PostgreSQL schema
├── public/               # Static files
├── styles/               # Global styles
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.ts        # Next.js configuration
```

## 🔐 Authentication Setup

1. In Supabase dashboard, enable Email authentication
2. Configure redirect URLs:
   - Local: `http://localhost:3000/auth/callback`
   - Production: `https://yourdomain.com/auth/callback`

## 📚 Key Pages

### Home Page (`/`)
- Hero section with call-to-action
- Feature highlights
- Quick statistics
- Navigation to explore and signup

### Explore Page (`/explore`)
- Browse all prompts
- Search functionality
- Filter by category
- View prompt previews

### Prompt Detail Page (`/prompts/[id]`)
- Full prompt content
- Author information
- Ratings and reviews
- Copy to clipboard functionality
- Like and share options

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:
- **Color Scheme**: Professional primary, secondary, and accent colors
- **Components**: Pre-built button, card, and input component styles
- **Responsive**: Mobile-first design with breakpoints for all screen sizes

## 🔄 API Endpoints (to be implemented)

- `GET /api/prompts` - Get all prompts
- `GET /api/prompts/[id]` - Get single prompt
- `POST /api/prompts` - Create new prompt
- `PUT /api/prompts/[id]` - Update prompt
- `DELETE /api/prompts/[id]` - Delete prompt
- `POST /api/auth/signup` - User signup
- `POST /api/auth/signin` - User signin
- `POST /api/prompts/[id]/like` - Like a prompt
- `POST /api/prompts/[id]/rate` - Rate a prompt

## 📦 Dependencies

### Core
- `next@^15.0.0` - React framework
- `react@^19.0.0` - UI library
- `typescript@^5.3.0` - Type safety

### Styling
- `tailwindcss@^3.4.0` - Utility-first CSS
- `postcss@^8.4.0` - CSS processing

### Database & Auth
- `@supabase/supabase-js@^2.38.0` - Supabase client
- `@supabase/auth-helpers-nextjs@^0.10.0` - Auth helpers

### Icons
- `lucide-react@^0.294.0` - Icon library

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on each push

### Other Platforms

1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Deploy the `.next` directory and public files

## 🔒 Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role (server-only)
- `NEXT_PUBLIC_APP_URL` - Your application URL

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema (if using Prisma)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

- 📧 Email: support@promptvault.ai
- 💬 Discord: [Join our community]
- 🐛 Issues: [GitHub Issues]
- 📚 Docs: [Full Documentation]

## 🎯 Roadmap

- [ ] User authentication pages
- [ ] Create/edit prompt pages
- [ ] User profile pages
- [ ] Notification system
- [ ] Prompt collections/folders
- [ ] Advanced analytics
- [ ] Prompt versioning
- [ ] Community moderation tools
- [ ] API rate limiting
- [ ] Mobile app

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Home, Explore, and Detail pages
- Database schema setup
- Supabase integration foundation

---

**Made with ❤️ by the PromptVault Team**

[⬆ back to top](#promptvault-ai-)
