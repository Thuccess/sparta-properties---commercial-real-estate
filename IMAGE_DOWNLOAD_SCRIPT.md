# Image Download and Integration Script

## Quick Start

Since images cannot be automatically downloaded, follow these steps to extract images from the existing website:

## Step 1: Identify Images on Existing Site

Visit: https://www.spartaproperties.co.ug/Sparta/Index.aspx

### Banner Images (Homepage)
Look for these banner images in the slider:
1. "Welcome to Sparta Properties, Welcome Home!"
2. "Luxury Condominiums"
3. "Furnished Bungalows/Apartments"
4. "2 Months of Free Property Management"
5. "Property Remodeling"
6. "Feasibility Study"
7. "Furnished City Apartments"
8. "Sparta Credit. Reliable and Simple Money!"

### Property Images
Navigate to property listings and download:
- Residential plot images
- Bungalow images
- Apartment images
- Condominium images
- Office space images
- Retail space images

### Service Images
Check service pages for:
- Property Management images
- Tenant Placement images
- Property Sale/Purchase images
- Land Title Processing images
- Listing & Marketing images
- Remodeling images
- Feasibility Study images
- Sparta Credit images

## Step 2: Download Images

### Method 1: Browser Developer Tools
1. Open website in Chrome/Firefox
2. Press F12 to open DevTools
3. Go to Network tab → Filter by "Img"
4. Reload page
5. Find image URLs
6. Right-click → Open in new tab
7. Save image with correct name

### Method 2: View Page Source
1. Right-click page → View Page Source
2. Search for `.jpg`, `.png`, `.jpeg`
3. Copy image URLs
4. Open in browser
5. Save with correct filename

### Method 3: Browser Extension
Use extensions like:
- Image Downloader (Chrome)
- Download All Images (Firefox)
- Bulk Image Downloader

## Step 3: Organize Images

Place downloaded images in these directories:

```
public/images/
├── hero/
│   └── hero-commercial-building.jpg (or hero-sparta-welcome.jpg)
├── properties/
│   ├── property-land-1.jpg
│   ├── property-land-2.jpg
│   ├── property-condominium-1.jpg
│   ├── property-condominium-2.jpg
│   ├── property-bungalow-1.jpg
│   ├── property-bungalow-2.jpg
│   ├── property-apartment-1.jpg
│   ├── property-apartment-2.jpg
│   ├── property-office-1.jpg (EXISTS - keep or replace)
│   ├── property-office-2.jpg (EXISTS - keep or replace)
│   ├── property-retail-1.jpg (EXISTS)
│   └── property-retail-2.jpg (EXISTS)
├── services/
│   ├── service-property-management.jpg
│   ├── service-tenant-placement.jpg
│   ├── service-property-sale-purchase.jpg
│   ├── service-land-title-processing.jpg
│   ├── service-property-listing-marketing.jpg
│   ├── service-property-remodeling.jpg
│   ├── service-feasibility-study.jpg
│   ├── service-sparta-credit.jpg
│   ├── service-office-leasing-strategy.jpg (EXISTS - keep or update)
│   ├── service-investment-advisory.jpg (EXISTS - keep or update)
│   ├── service-industrial-logistics.jpg
│   ├── service-retail-asset-management.jpg
│   └── service-property-maintenance.jpg
├── about/
│   └── about-corporate.jpg (EXISTS - keep or replace)
├── contact/
│   └── contact-office.jpg (EXISTS - replace with actual office photo)
└── logo.png (EXISTS - keep or replace)
```

## Step 4: Optimize Images

### Using Online Tools:
1. **TinyPNG** (https://tinypng.com/)
   - Upload images
   - Download optimized versions
   - Maintains quality, reduces size

2. **Squoosh** (https://squoosh.app/)
   - Convert to WebP
   - Adjust quality
   - Compare before/after

3. **ImageOptim** (Mac) or **FileOptimizer** (Windows)
   - Batch optimization
   - Automatic compression

### Target Sizes:
- Hero images: Max 1920px width, ~200-300KB
- Property images: Max 1200px width, ~150-200KB
- Service images: Max 800px width, ~100-150KB
- Thumbnails: Max 400px width, ~50KB

## Step 5: Verify Integration

After placing images:

1. **Check file paths match code references**
   - All paths in `src/lib/constants.ts` should exist
   - Service images: `/images/services/service-{id}.jpg`
   - Property images: `/images/properties/property-{type}-{number}.jpg`

2. **Test in browser**
   - Run `npm run dev`
   - Navigate through all pages
   - Check image loading
   - Verify no broken images

3. **Check responsive behavior**
   - Test on mobile
   - Test on tablet
   - Test on desktop
   - Verify images scale correctly

## Current Image Status

### ✅ Existing Images (Keep or Replace):
- `/images/hero/hero-commercial-building.jpg`
- `/images/properties/property-office-1.jpg`
- `/images/properties/property-office-2.jpg`
- `/images/properties/property-retail-1.jpg`
- `/images/properties/property-retail-2.jpg`
- `/images/properties/property-industrial-1.jpg`
- `/images/services/service-leasing.jpg`
- `/images/services/service-management.jpg`
- `/images/services/service-advisory.jpg`
- `/images/about/about-corporate.jpg`
- `/images/contact/contact-office.jpg`
- `/images/logo.png`

### ❌ Missing Images (Need to Download):
- `/images/properties/property-land-1.jpg`
- `/images/properties/property-land-2.jpg`
- `/images/properties/property-condominium-1.jpg`
- `/images/properties/property-condominium-2.jpg`
- `/images/properties/property-bungalow-1.jpg`
- `/images/properties/property-bungalow-2.jpg`
- `/images/properties/property-apartment-1.jpg`
- `/images/properties/property-apartment-2.jpg`
- All service images for new services (property-management, tenant-placement, etc.)

## Notes

- Images are referenced in code but may not exist yet
- Next.js Image component will handle optimization automatically
- Broken images will show as missing - replace with actual images
- Maintain aspect ratios to prevent layout shifts
- Use descriptive alt text for SEO

