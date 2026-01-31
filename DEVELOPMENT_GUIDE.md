# YNB Hospital Solutions - Frontend Starter

This is a production-ready Next.js foundation for the YNB Hospital Solutions website.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm (installed by default with Node.js)

### Installation
1. Navigate to the project directory:
   ```bash
   cd Hospital
   ```
2. Install# Development Guide: Prime Insurance Services Rebrand

This project is a high-performance Next.js foundation for Prime Insurance Services, located in Rajgurunagar, Pune.

## Core Pillars
- **Trust & Security**: UI designed with insurance industry standards (Blues, Teals, Gold).
- **Rajgurunagar Focus**: Optimized for local SEO in Pune district.
- **Conversion Driven**: Integrated WhatsApp and Contact CTAs.

## Key Components
- `FloatingWhatsAppButton`: Direct chat integration.
- `FloatingContactButton`: Scroll-aware mobile-friendly CTA.
- `ServiceGrid`: Dynamic category listing for Life, Health, Vehicle, and Property insurance.

## How to Extend Content
1. **Adding Insurance Plans**: Update `servicesData` in `src/app/services/[slug]/page.tsx` and add to the `featuredServices` list in `ServiceGrid.tsx`.
2. **Updating Insights**: The blog section in `page.tsx` uses a static map. Future integration will involve a CMS or local JSON for articles.
3. **Changing Locations**: Update contact details in `Footer.tsx`, `ContactPage`, and `seo.ts`.
- We use Tailwind CSS 4.0 CSS-first configuration.

### SEO Best Practices
- Every page should export a `Metadata` object using the `constructMetadata` helper from `@/lib/seo`.
- Example:
```tsx
export const metadata = constructMetadata({
  title: "New Page",
  description: "Description here",
});
```

### Accessibility
- Use semantic HTML tags (`section`, `main`, `h1`, etc.).
- Ensure all interactive elements have proper `aria-label` where necessary (Header already has this for the mobile menu).
