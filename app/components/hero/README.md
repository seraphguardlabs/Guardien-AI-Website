# Hero Section Components

This folder contains all the components for the GuardienAI hero section.

## Components

### HeroSection.tsx

Main container component that:

- Renders the background image with overlay
- Combines Header and HeroContent components
- Handles the overall layout and z-index stacking

### Header.tsx

Navigation header component featuring:

- GuardienAI logo and branding
- Navigation links (Mission, Pricing, Research)
- Contact Us button
- Responsive mobile menu button

### HeroContent.tsx

Hero content component including:

- Safety badge with lightning icon
- Main headline
- Subheading text
- Call-to-action buttons (Request Early Access, Watch Demo)

## Usage

```tsx
import { HeroSection } from "./components/hero";

export default function Page() {
  return <HeroSection />;
}
```

## Styling

All components use Tailwind CSS with:

- Responsive design (mobile-first approach)
- Dark overlay on background image for text readability
- Glassmorphism effects on buttons
- Smooth hover transitions
