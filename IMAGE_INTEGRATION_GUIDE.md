# Image Integration Guide for Sparta Properties Website

## Overview
This document maps all images from the existing website (https://www.spartaproperties.co.ug) to their correct locations in the new website structure.

## Image Directory Structure

```
/public/images/
├── hero/
│   └── hero-commercial-building.jpg (EXISTS - keep or replace with banner from existing site)
├── properties/
│   ├── property-office-1.jpg (EXISTS - placeholder, replace with real property images)
│   ├── property-office-2.jpg (EXISTS - placeholder, replace with real property images)
│   ├── property-retail-1.jpg (EXISTS)
│   ├── property-retail-2.jpg (EXISTS)
│   ├── property-industrial-1.jpg (EXISTS)
│   ├── property-land-1.jpg (NEW - for residential land listings)
│   ├── property-condominium-1.jpg (NEW - for luxury condominiums)
│   ├── property-condominium-2.jpg (NEW - for luxury condominiums)
│   ├── property-bungalow-1.jpg (NEW - for furnished bungalows)
│   ├── property-bungalow-2.jpg (NEW - for furnished bungalows)
│   ├── property-apartment-1.jpg (NEW - for furnished city apartments)
│   └── property-apartment-2.jpg (NEW - for furnished city apartments)
├── services/
│   ├── service-property-management.jpg (NEW - from existing site)
│   ├── service-tenant-placement.jpg (NEW - from existing site)
│   ├── service-property-sale-purchase.jpg (NEW - from existing site)
│   ├── service-land-title-processing.jpg (NEW - from existing site)
│   ├── service-property-listing-marketing.jpg (NEW - from existing site)
│   ├── service-property-remodeling.jpg (NEW - from existing site)
│   ├── service-feasibility-study.jpg (NEW - from existing site)
│   ├── service-sparta-credit.jpg (NEW - from existing site)
│   ├── service-office-leasing-strategy.jpg (EXISTS - keep or update)
│   ├── service-investment-advisory.jpg (EXISTS - keep or update)
│   ├── service-industrial-logistics.jpg (NEW - from existing site)
│   ├── service-retail-asset-management.jpg (NEW - from existing site)
│   └── service-property-maintenance.jpg (NEW - from existing site)
├── about/
│   └── about-corporate.jpg (EXISTS - keep or replace with company image from existing site)
├── contact/
│   └── contact-office.jpg (EXISTS - replace with actual office image from Block 7, Katwe)
├── agents/
│   ├── agent-michael.jpg (EXISTS - keep or replace)
│   ├── agent-sarah.jpg (EXISTS - keep or replace)
│   └── agent-david.jpg (EXISTS - keep or replace)
├── partners/
│   └── (existing partner logos - keep)
└── logo.png (EXISTS - keep or replace with logo from existing site)
```

## Image Mapping by Page/Section

### Homepage (src/app/page.tsx)
- **Hero Section**: `/images/hero/hero-commercial-building.jpg`
  - Source: Main banner from existing homepage
  - Action: Keep existing or replace with banner from spartaproperties.co.ug homepage

### Properties Page (src/app/properties/page.tsx)
- Uses PropertyCard component which references `property.images[0]` from constants

### Property Detail Pages (src/app/properties/[id]/page.tsx)
- Uses PropertyGallery component
- Images come from `property.images` array in constants.ts

### Services Page (src/app/services/page.tsx)
- Dynamic service images: `/images/services/service-{service.id}.jpg`
- Service IDs mapped below

### About Page (src/app/about/page.tsx)
- Company image: `/images/about-corporate.jpg`
- Source: Company/team image from existing about section

### Contact Page (src/app/contact/page.tsx)
- Office image: `/images/contact-office.jpg`
- Source: Actual office photo from Block 7, Katwe location

## Service Image Mapping

Based on service IDs in constants.ts:

| Service ID | Image Path | Source Location |
|------------|------------|----------------|
| property-management | `/images/services/service-property-management.jpg` | Services section - Property Management |
| tenant-placement | `/images/services/service-tenant-placement.jpg` | Services section - Tenant Placement |
| property-sale-purchase | `/images/services/service-property-sale-purchase.jpg` | Services section - Sale & Purchase |
| land-title-processing | `/images/services/service-land-title-processing.jpg` | Services section - Land Title Processing |
| property-listing-marketing | `/images/services/service-property-listing-marketing.jpg` | Services section - Listing & Marketing |
| property-remodeling | `/images/services/service-property-remodeling.jpg` | Services section - Property Remodeling |
| feasibility-study | `/images/services/service-feasibility-study.jpg` | Services section - Feasibility Study |
| sparta-credit | `/images/services/service-sparta-credit.jpg` | Services section - Sparta Credit |
| office-leasing-strategy | `/images/services/service-office-leasing-strategy.jpg` | Services section - Office Leasing |
| investment-advisory | `/images/services/service-investment-advisory.jpg` | Services section - Investment Advisory |
| industrial-logistics | `/images/services/service-industrial-logistics.jpg` | Services section - Industrial |
| retail-asset-management | `/images/services/service-retail-asset-management.jpg` | Services section - Retail |
| property-maintenance | `/images/services/service-property-maintenance.jpg` | Services section - Maintenance |

## Property Image Mapping

Based on property data in constants.ts:

| Property ID | Category | Image Paths | Source |
|-------------|----------|-------------|--------|
| 1 | Residential Land | `/images/properties/property-land-1.jpg`, `property-land-2.jpg` | Property listings - Residential plots |
| 2 | Office Space | `/images/properties/property-office-1.jpg`, `property-office-2.jpg` | Property listings - Office spaces |
| 3 | Retail Space | `/images/properties/property-retail-1.jpg`, `property-retail-2.jpg` | Property listings - Retail spaces |
| 4 | Luxury Condominiums | `/images/properties/property-condominium-1.jpg`, `property-condominium-2.jpg` | Property listings - Condominiums |
| 5 | Furnished Bungalows | `/images/properties/property-bungalow-1.jpg`, `property-bungalow-2.jpg` | Property listings - Bungalows |
| 6 | Furnished City Apartments | `/images/properties/property-apartment-1.jpg`, `property-apartment-2.jpg` | Property listings - Apartments |

## Image Download Instructions

1. **Navigate to existing website**: https://www.spartaproperties.co.ug/Sparta/Index.aspx

2. **For each image category**:
   - Right-click on image → "Inspect Element" or "View Image"
   - Copy image URL
   - Download image using browser or wget/curl
   - Rename according to mapping above
   - Place in correct directory

3. **Image Optimization**:
   - Convert to WebP format where possible
   - Compress using tools like:
     - ImageOptim (Mac)
     - TinyPNG (Web)
     - Squoosh (Web)
   - Target sizes:
     - Hero images: Max 1920px width, ~200-300KB
     - Property images: Max 1200px width, ~150-200KB
     - Service images: Max 800px width, ~100-150KB
     - Thumbnails: Max 400px width, ~50KB

4. **Quality Checks**:
   - All images should be high resolution
   - No pixelation or compression artifacts
   - Proper aspect ratios maintained
   - Consistent color grading where applicable

## Banner Images from Existing Site

The existing site has banner images for:
- Welcome to Sparta Properties
- Luxury Condominiums
- Furnished Bungalows/Apartments
- 2 Months of Free Property Management
- Property Remodeling
- Feasibility Study
- Furnished City Apartments
- Sparta Credit

These can be used for:
- Hero section rotation
- Service page headers
- Property category headers

## Notes

- All images should be optimized for web
- Use Next.js Image component for automatic optimization
- Ensure alt text is descriptive and SEO-friendly
- Maintain aspect ratios to prevent layout shifts
- Test on mobile, tablet, and desktop viewports

