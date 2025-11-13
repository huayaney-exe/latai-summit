# LATAI Summit - High-Converting Landing Page

A modern, high-converting landing page for the LATAI Summit (Latin American AI Summit) in Peru, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This landing page is designed to be **10x better** than the Colombian AI Summit (aisummit.com.co) by implementing:

- **Benefit-driven messaging** focused on outcomes, not just event details
- **Strategic 4-tier pricing** with real-time scarcity indicators
- **Multi-layered social proof** (stats, live activity, testimonials)
- **Interactive ROI calculator** to demonstrate value
- **Mobile-first responsive design** optimized for conversion
- **Peru-specific positioning** with local credibility focus

## 🚀 Features

### Core Sections

1. **Hero Section**
   - Benefit-driven headline targeting LATAM leaders
   - Dual CTAs (primary: Early Bird tickets, secondary: View Agenda)
   - Trust bar with key event stats
   - Real-time countdown timer with scarcity messaging
   - Animated gradient background

2. **Social Proof Section**
   - Animated statistics (500+ attendees, 15 speakers, etc.)
   - Live activity feed showing recent registrations
   - Trust badges (Stripe secure, money-back guarantee, certificate)

3. **Pricing Section** (Stripe-Ready)
   - 4-tier strategic pricing (Super Early Bird → Last Chance)
   - "Most Popular" badge on optimal tier
   - Real-time availability indicators
   - Feature comparison matrix
   - Payment method showcase
   - Group discount messaging

4. **Speaker Showcase**
   - 8 speakers (60% Peru, 30% LATAM, 10% International)
   - Expandable bio modals
   - Session topic preview on hover
   - "Become a Speaker" CTA

5. **Agenda Section**
   - Tabbed navigation (Day 1 / Day 2)
   - Color-coded track system
   - Timeline-style layout
   - Download PDF option

6. **ROI Calculator** (Interactive)
   - Industry selection
   - Company size slider
   - AI maturity assessment
   - Personalized ROI projection

7. **FAQ Accordion**
   - 10 strategic FAQs addressing key objections
   - Smooth expand/collapse animations
   - Contact CTAs (Email, WhatsApp)

8. **Partner Showcase**
   - Tiered partner display (Platinum, Gold, Community, Media)
   - "Become a Partner" CTA
   - Footer with social links and navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS keyframes + Tailwind transitions
- **Analytics**: Google Analytics 4 + Meta Pixel (placeholders ready)

## 📦 Installation & Development

```bash
# Navigate to project directory
cd latai-summit

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

## 🎨 Customization Guide

### 1. Update Analytics IDs

In `app/layout.tsx`:
- Replace `G-XXXXXXXXXX` with your Google Analytics 4 ID
- Replace `YOUR_PIXEL_ID` with your Meta Pixel ID

### 2. Configure Stripe Integration

```bash
npm install @stripe/stripe-js stripe
```

Update `components/PricingSection.tsx` with your Stripe price IDs

### 3. Update Event Details

- **Speakers**: `components/SpeakerShowcase.tsx`
- **Agenda**: `components/AgendaSection.tsx`
- **Pricing**: `components/PricingSection.tsx`
- **FAQs**: `components/FAQSection.tsx`
- **Hero countdown**: `components/Hero.tsx`

### 4. Add Real Images

Create `/public/images/` directories and replace emoji placeholders with actual images

### 5. Optimize SEO

Update `app/layout.tsx` metadata with:
- Actual event URL
- Social sharing image (`/og-image.jpg` - 1200x630px)
- Keywords relevant to your target audience

## 📊 Expected Performance

| Metric | Target | Industry Avg |
|--------|--------|--------------|
| Conversion Rate | 10-15% | 6.6% |
| Mobile Traffic | >60% | 62.54% |
| Bounce Rate | <40% | ~50% |

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile Optimization

- Fully responsive (320px → 1440px+)
- Touch-optimized buttons (44px+ height)
- Fast loading target (<3s on 4G)

## 📄 File Structure

```
latai-summit/
├── app/
│   ├── layout.tsx        # Root layout with SEO
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles + animations
├── components/
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── PricingSection.tsx
│   ├── SpeakerShowcase.tsx
│   ├── AgendaSection.tsx
│   ├── ROICalculator.tsx
│   ├── FAQSection.tsx
│   └── PartnerShowcase.tsx
└── public/
    └── images/           # (Create for real images)
```

## 🎨 Design System

**Colors:**
- Primary: Cyan-500 → Blue-600
- Accent: Purple-600 → Pink-600
- Background: Slate-900 with purple tints

**Typography:**
- Headlines: Bold, 4xl-7xl
- Body: lg-xl
- Small: sm-xs

## 📈 Next Steps

1. Replace placeholder content with real data
2. Integrate Stripe with actual products
3. Set up analytics tracking
4. Test on mobile devices
5. Launch marketing campaigns

## 🤝 Support

- Email: hola@lataisummit.com
- WhatsApp: +51 999 999 999

---

**Built with 🤖 by Claude Code**
