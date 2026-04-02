# Gigacrux - AI Workflow Automation Platform

A modern, high-performance website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features advanced animations, AI-powered automation workflows, and seamless integrations with popular business tools.

![Gigacrux](https://via.placeholder.com/1200x630/0A1628/00A3FF?text=Gigacrux+-+AI+Automation)

## ✨ Features

- **🎨 Modern Design**: Dark theme with vibrant cyan and orange accents
- **⚡ High Performance**: Built with Next.js 14 App Router for optimal speed
- **🎭 Advanced Animations**: Smooth transitions powered by Framer Motion
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎯 SEO Optimized**: Meta tags, sitemap, and structured data
- **♿ Accessible**: WCAG AA compliant with proper ARIA labels
- **📝 CMS Ready**: Contentful integration for blog content
- **🔒 Type-Safe**: Full TypeScript coverage
- **🎨 Tailwind CSS**: Utility-first styling with custom design tokens

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **CMS**: [Contentful](https://www.contentful.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Project Structure

```
gigacrux/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Base UI components
│   ├── sections/          # Page sections (Hero, Features, etc.)
│   ├── layout/            # Header, Footer, Navigation
│   ├── animations/        # Animation wrappers
│   └── forms/             # Form components
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── constants.ts       # Design tokens and constants
│   ├── contentful.ts      # Contentful client
│   └── validations.ts     # Zod schemas
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
├── config/                # Configuration files
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Contentful account (optional, for blog functionality)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/gigacrux.git
cd gigacrux
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Contentful credentials (optional):

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Color Palette

### Primary Colors
- Deep Navy: `#0A1628` - Main background
- Bright Cyan: `#00A3FF` - Primary accent
- Electric Blue: `#0D7FFF` - Interactive elements

### Accent Colors
- Orange: `#FF6B35` - CTAs and highlights
- Red-Orange: `#FF4500` - Gradient accents
- Golden Yellow: `#FFB800` - Premium features

### Neutral Colors
- White: `#FFFFFF` - Headings
- Light Gray: `#E8E8E8` - Body text
- Dark Gray: `#2A2A2A` - Card backgrounds

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Key Pages

- **Home** (`/`) - Hero, features, testimonials, FAQ
- **About** (`/about`) - Company story, team, mission & vision
- **Pricing** (`/pricing`) - Pricing tiers, comparison table, FAQ
- **Contact** (`/contact`) - Contact form with validation

## 🔧 Configuration

### Tailwind Config

Custom theme configuration with brand colors, animations, and utilities in `tailwind.config.ts`.

### Site Config

Global site configuration in `config/site.ts` including navigation, metadata, and social links.

### Contentful Setup

Follow the guide in `CONTENTFUL_SETUP.md` to set up your Contentful space with the required content models.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gigacrux)

## 📈 Performance

- Lighthouse Score: 90+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Fully responsive and mobile-optimized

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👏 Acknowledgments

- Design inspired by [Fusion AI](https://fusionai.framer.website/)
- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support, email support@gigacrux.com or join our community forum.

---

**Made with ❤️ by the Gigacrux Team**
