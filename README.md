# Lunch Kay

A modern, animated landing page built with Next.js 15, React 19, and GSAP animations. Features a responsive design with custom UI components and smooth animations.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with React 19 and TypeScript
- **Smooth Animations**: GSAP-powered animations with custom components
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Custom UI Components**: Reusable animated components
- **Performance Optimized**: Turbopack for fast development builds

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lunch-kay
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── animated-cards.tsx
│   │   ├── button.tsx
│   │   ├── circular-text.tsx
│   │   ├── ico-button.tsx
│   │   ├── invest-button.tsx
│   │   ├── scroll-velocity.tsx
│   │   └── split-text.tsx
│   ├── clouds.tsx         # Cloud animation component
│   ├── header.tsx         # Site header
│   └── hero.tsx          # Hero section
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Key Components

### Animation Components
- **SplitText**: GSAP-powered text animations with character/word splitting
- **AnimatedCards**: Interactive card grid with hover effects
- **ScrollVelocity**: Velocity-based scroll animations
- **CircularText**: Rotating circular text animation

### UI Components
- **Button**: Styled button component with variants
- **InvestButton**: Investment-specific button with animations
- **IcoButton**: ICO-themed button component

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3.13, Framer Motion
- **Icons**: Lucide React, React Icons, Tabler Icons
- **Build Tool**: Turbopack
- **Package Manager**: pnpm

## 📱 Responsive Design

The application is built mobile-first and fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Development Guidelines

- Use TypeScript for all new components
- Follow the existing component structure in `src/components/ui/`
- Prefer Tailwind classes over custom CSS
- Use GSAP for complex animations
- Test on mobile devices during development

## 📄 Additional Documentation

See [CLAUDE.md](./CLAUDE.md) for AI-specific context and development patterns.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to main

## 📝 License

[Add your license here]
