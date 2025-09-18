# CLAUDE.md - AI Development Context

This document provides context for AI assistants working on the Lunch Kay project.

## Project Overview

**Lunch Kay** is a modern, animated landing page for a cryptocurrency/token launch platform. The project emphasizes smooth animations, responsive design, and a premium user experience.

## Architecture & Patterns

### Component Structure
```
src/components/
├── ui/              # Reusable UI components
│   ├── animated-cards.tsx    # Interactive card grid with GSAP animations
│   ├── button.tsx           # Base button with class-variance-authority variants
│   ├── circular-text.tsx    # Rotating circular text component
│   ├── ico-button.tsx       # ICO-themed action button
│   ├── invest-button.tsx    # Investment-themed action button
│   ├── scroll-velocity.tsx  # Velocity-based scroll animations
│   └── split-text.tsx       # GSAP SplitText wrapper for text animations
├── clouds.tsx       # Background cloud animation component
├── header.tsx       # Site navigation header
└── hero.tsx        # Main hero section with animations
```

### Key Technologies & Libraries

1. **Next.js 15** - App Router with Turbopack
2. **React 19** - Latest React features
3. **TypeScript** - Full type safety
4. **GSAP 3.13** - Advanced animations
   - SplitText plugin for text animations
   - ScrollTrigger for scroll-based animations
5. **Tailwind CSS 4** - Utility-first styling
6. **class-variance-authority** - Type-safe component variants
7. **Framer Motion** - Additional animation library

### Animation Patterns

#### GSAP Integration
- Use `useGSAP` hook for GSAP animations in React components
- Register plugins: `gsap.registerPlugin(SplitText, useGSAP)`
- Clean up animations in component unmount
- Use `gsap.fromTo()` for most animations with consistent easing

#### Common Animation Types
1. **Text Animations**: SplitText component for character/word reveals
2. **Card Animations**: Staggered entrance animations with hover states
3. **Scroll Animations**: Velocity-based and parallax effects
4. **Button Animations**: Hover states with transforms and opacity

### Styling Conventions

#### Tailwind Usage
- Use Tailwind classes exclusively (no custom CSS unless necessary)
- Mobile-first responsive design: `sm:`, `md:`, `lg:` breakpoints
- Custom brand colors defined in Tailwind config
- Consistent spacing using Tailwind's spacing scale

#### Component Patterns
```typescript
// Standard component pattern
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // ... other props
}

const Component: React.FC<ComponentProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  );
};
```

### Development Workflow

#### Commands (Use pnpm)
- `pnpm dev` - Development with Turbopack
- `pnpm build` - Production build
- `pnpm lint` - ESLint checking
- `pnpm start` - Production server

#### File Organization
- Components in `src/components/` with clear naming
- UI components in `src/components/ui/` for reusability
- Utilities in `src/lib/utils.ts`
- Types defined inline or in component files

### Common Patterns & Solutions

#### Animation Components
When creating animated components:
1. Use `useRef` for DOM element references
2. Use `useGSAP` hook for GSAP animations
3. Clean up animations in the dependency array or return function
4. Use `force3D: true` and `willChange` for performance

#### Responsive Design
- Mobile-first approach
- Use Tailwind responsive prefixes
- Test on mobile devices during development
- Consider touch interactions for mobile

#### Performance Considerations
- Use `next/dynamic` for heavy components if needed
- Optimize GSAP animations with `force3D`
- Use appropriate image optimization
- Turbopack provides fast development builds

### Common Issues & Solutions

#### GSAP in Next.js
- Always register plugins in client components
- Use `"use client"` directive for components with GSAP
- Clean up timelines and ScrollTriggers properly

#### Styling Issues
- Use `cn()` utility for combining classes
- Avoid custom CSS when Tailwind classes exist
- Use Tailwind's arbitrary value syntax for one-offs: `w-[123px]`

#### TypeScript
- Define proper interfaces for component props
- Use React.FC type for functional components
- Leverage TypeScript for GSAP animation properties

### Brand Context

The project appears to be a cryptocurrency/token launch platform with:
- Premium, modern aesthetic
- Rainbow/colorful branding
- Focus on "investment" and "ICO" concepts
- Smooth, engaging animations to build trust

### AI Assistant Guidelines

When working on this project:

1. **Always use pnpm** for package management
2. **Maintain animation consistency** - follow GSAP patterns
3. **Keep mobile-first approach** - test responsive behavior
4. **Use TypeScript properly** - maintain type safety
5. **Follow existing component patterns** - consistency is key
6. **Clean up animations** - prevent memory leaks
7. **Use Tailwind extensively** - avoid custom CSS
8. **Test animations on different devices** - performance matters

### File References for Context

Key files to understand the project:
- `src/app/page.tsx` - Main page structure
- `src/components/hero.tsx` - Primary content area
- `src/components/ui/split-text.tsx` - Text animation patterns
- `src/components/ui/animated-cards.tsx` - Card animation patterns
- `src/lib/utils.ts` - Utility functions including `cn()`
- `package.json` - Dependencies and scripts

### Development Commands for AI

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Install new dependency
pnpm add <package-name>

# Install dev dependency
pnpm add -D <package-name>
```

Remember: This is a high-quality, modern web application that prioritizes user experience, performance, and visual appeal. Maintain these standards in all contributions.