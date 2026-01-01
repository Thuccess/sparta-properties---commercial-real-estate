
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
  UNDER_RENOVATION = 'Under Renovation'
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceType: 'per sqm' | 'total' | 'negotiable';
  type: PropertyType;
  sqm: number;
  status: ListingStatus;
  description: string;
  images: string[];
  amenities: string[];
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

