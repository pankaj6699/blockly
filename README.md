# Blocly - PR & Link Building Agency Website

Modern Next.js website for Blocly, a crypto-native PR and link-building agency operating across Web2 and Web3.

## 🚀 Live Site

**Production:** [https://blocly.co](https://blocly.co)

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **CMS:** WordPress (Headless)
- **Deployment:** GitHub Pages
- **Build:** Static Export (SSG)

## 📋 Features

- ✅ **100% WordPress CMS** - All content managed from WordPress
- ✅ **Static Site Generation** - Fast, SEO-optimized pages
- ✅ **Auto-deployment** - Push to GitHub → Auto-deploy to blocly.co
- ✅ **Headless CMS** - WordPress backend, Next.js frontend
- ✅ **Contact Form** - Direct WordPress API integration
- ✅ **Custom Post Types** - Services, Case Studies, Pricing, Blog

## 🔧 Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_CONTENT_SOURCE=wordpress
NEXT_PUBLIC_WORDPRESS_URL=https://beige-eel-881953.hostingersite.com
NEXT_PUBLIC_WORDPRESS_API_URL=https://beige-eel-881953.hostingersite.com/wp-json/wp/v2
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

Generates static site in `/out` directory.

## 📦 Content Management

### WordPress Backend

**Admin:** https://beige-eel-881953.hostingersite.com/wp-admin

**Content Types:**
- **Services** - 5 service offerings
- **Case Studies** - Client success stories
- **Pricing** - 3 pricing tiers
- **Blog Posts** - Insights & guides
- **Homepage Settings** - Stats, reasons, process
- **About Settings** - Company values, team
- **Contact Settings** - Contact page highlights
- **Methodology Settings** - Scoring principles

### REST API Endpoints

```
Homepage:     /wp-json/blocly/v1/homepage
About:        /wp-json/blocly/v1/about
Contact:      /wp-json/blocly/v1/contact-settings
Methodology:  /wp-json/blocly/v1/methodology
Services:     /wp-json/wp/v2/services
Case Studies: /wp-json/wp/v2/case-studies
Pricing:      /wp-json/wp/v2/pricing
Blog Posts:   /wp-json/wp/v2/posts
```

## 🚀 Deployment

### Auto-Deployment (GitHub Actions)

1. Push to `main` branch
2. GitHub Actions builds site
3. Deploys to GitHub Pages
4. Live at blocly.co (2-3 minutes)

### Manual Deployment

```bash
npm run build
git add out/
git commit -m "build: static export"
git push origin main
```

## 📁 Project Structure

```
blockly/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   └── lib/              # Utilities & data fetching
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
└── out/                  # Build output (static export)
```

## 🔌 WordPress Plugin

**Plugin:** Blocly REST API Fields v1.5

**Location:** `wp-content/plugins/blocly-rest-api/`

**Features:**
- Exposes ACF fields via REST API
- Custom endpoints for settings pages
- Contact form submission handler
- CORS headers for GitHub Pages

## 🎨 Design System

- **Font:** Inter (variable)
- **Colors:** Dark theme with accent colors
- **Components:** Custom UI components in `/src/components/ui`

## 📄 License

Private project - All rights reserved

## 👥 Contact

**Website:** [blocly.co](https://blocly.co)  
**Email:** sam@blocly.co
