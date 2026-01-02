
export enum PropertyType {
  OFFICE = 'Office',
  RETAIL = 'Retail',
  INDUSTRIAL = 'Industrial',
  LAND = 'Land',
  RESIDENTIAL = 'Residential'
}

export enum ListingStatus {
  AVAILABLE = 'Available',
  LEASED = 'Leased',
  SOLD = 'Sold',
  FOR_SALE = 'For sale',
  UNDER_RENOVATION = 'Under Renovation'
}

export interface Property {
  id: string;
  code?: string;
  title: string;
  location: string;
  district?: string;
  price: string;
  priceType: 'per sqm' | 'total' | 'negotiable';
  type: PropertyType;
  sqm?: number;
  size?: string; // e.g., "33 Decimals"
  tenure?: string; // e.g., "Mailo Land"
  category?: string; // e.g., "Residential Land"
  status: ListingStatus;
  description: string;
  images: string[];
  amenities: string[];
  inspectionFee?: boolean;
  phone?: string; // Direct contact phone
  googleMapPin?: string; // Google Maps URL or coordinates
  agent: {
    name: string;
    phone: string;
    image: string;
    email: string;
  };
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
}

