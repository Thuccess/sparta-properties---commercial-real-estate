# Sparta Properties Limited - Commercial Real Estate Website

A high-end, corporate commercial real estate platform built with Next.js, TypeScript, and Tailwind CSS. This website showcases commercial properties, services, and provides a professional platform for property leasing, management, and strategic consultancy in Kampala, Uganda.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── properties/        # Properties listing & details
│   └── contact/           # Contact page
├── components/            # React components
│   ├── layout/            # Navbar, Footer
│   ├── property/          # Property-related components
│   ├── ui/                # Reusable UI components
│   └── common/            # Common components
├── lib/                   # Utilities & constants
├── types/                 # TypeScript type definitions
└── data/                  # Data helpers & mock data
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Features

- **Property Listings:** Browse and filter commercial properties
- **Property Details:** Detailed property pages with galleries and specifications
- **Services:** Comprehensive real estate services information
- **Contact Forms:** Inquiry and consultation request forms
- **Responsive Design:** Fully responsive across all devices
- **Modern UI/UX:** Professional corporate design with smooth animations

## Development

- The app uses Next.js App Router for routing
- All components are in TypeScript with strict type checking
- Tailwind CSS is configured with custom corporate colors
- Framer Motion handles page transitions and animations

## Project Status

This is a production-ready frontend structure ready for backend/API integration. All UI/UX has been finalized and approved.
