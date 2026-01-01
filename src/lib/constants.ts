
import { Property, PropertyType, ListingStatus, Service, Testimonial } from '../types/property';

export const COMPANY_NAME = "Sparta Properties Limited";
export const COMPANY_PHONE = "+256 700 000000";
export const COMPANY_EMAIL = "info@spartaproperties.co.ug";
export const COMPANY_ADDRESS = "Plot 12, Acacia Avenue, Kololo, Kampala";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Nakasero Grade A Office Complex',
    location: 'Nakasero Hill, Kampala',
    price: '$22',
    priceType: 'per sqm',
    type: PropertyType.OFFICE,
    sqm: 2400,
    status: ListingStatus.AVAILABLE,
    description: 'A premier architectural landmark offering state-of-the-art office spaces. Designed for multinational corporations seeking a strategic presence in Kampala CBD. Includes advanced HVAC systems, high-speed fiber optics, and gold-standard safety certifications.',
    images: [
      '/images/properties/property-office-1.jpg',
      '/images/properties/property-office-2.jpg'
    ],
    amenities: ['24/7 Security', 'Biometric Access', 'Central AC', '6 High-speed Elevators', 'Ample Parking'],
    highlights: ['LEED Certified', 'Panoramic City Views', 'Private Roof Garden'],
    agent: {
      name: 'Michael Okello',
      phone: '+256 772 123456',
      email: 'm.okello@spartaproperties.co.ug',
      image: '/images/agents/agent-michael.jpg'
    }
  },
  {
    id: '2',
    title: 'Naguru Retail & Medical Pavilion',
    location: 'Naguru, Kampala',
    price: '$18',
    priceType: 'per sqm',
    type: PropertyType.RETAIL,
    sqm: 850,
    status: ListingStatus.AVAILABLE,
    description: 'High-visibility corner plot ideal for luxury retail or specialized medical clinics. Featuring double-height ceilings and a modern glass facade that maximizes brand exposure in a high-income residential neighborhood.',
    images: [
      '/images/properties/property-retail-1.jpg',
      '/images/properties/property-retail-2.jpg'
    ],
    amenities: ['CCTV Surveillance', 'Customer Valet', 'Loading Dock', 'Solar Power Backup'],
    highlights: ['High Footfall', 'Shell & Core Condition', 'Dedicated Signage Space'],
    agent: {
      name: 'Sarah Nakato',
      phone: '+256 782 654321',
      email: 's.nakato@spartaproperties.co.ug',
      image: '/images/agents/agent-sarah.jpg'
    }
  },
  {
    id: '3',
    title: 'Industrial Logistics Hub B2',
    location: 'Namanve Industrial Park',
    price: '$6',
    priceType: 'per sqm',
    type: PropertyType.INDUSTRIAL,
    sqm: 10000,
    status: ListingStatus.LEASED,
    description: 'Custom-built logistics facility with heavy-duty reinforced flooring and 12-meter clear heights. Perfectly positioned for regional distribution within East Africa.',
    images: [
      '/images/properties/property-industrial-1.jpg'
    ],
    amenities: ['Truck Maneuvering Yard', '3-Phase Power', 'Guard House', 'Fire Sprinklers'],
    highlights: ['Tax-free Zone Access', 'Customizable Layout', 'Close to Railway Link'],
    agent: {
      name: 'David Ssenyonyi',
      phone: '+256 752 987654',
      email: 'd.ssenyonyi@spartaproperties.co.ug',
      image: '/images/agents/agent-david.jpg'
    }
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 'leasing',
    title: 'Commercial Leasing',
    description: 'Unlocking asset value through strategic tenant matching and lease negotiation.',
    icon: 'Building2',
    fullContent: 'Our leasing specialists utilize proprietary market data and a deep network of corporate relationships to secure high-quality tenants. We focus on long-term occupancy stability and rental growth.'
  },
  {
    id: 'management',
    title: 'Asset Management',
    description: 'Professional stewardship of commercial portfolios to ensure maximum ROI.',
    icon: 'ShieldCheck',
    fullContent: 'We go beyond basic maintenance. Our asset management team performs regular financial audits, implements energy-efficiency upgrades, and maintains elite tenant relations to preserve property value.'
  },
  {
    id: 'consultancy',
    title: 'Investment Advisory',
    description: 'Data-driven insights for developers and institutional investors.',
    icon: 'TrendingUp',
    fullContent: 'From feasibility studies to site selection and capital markets advisory, we provide the technical expertise required to navigate the complexities of the Ugandan real estate market.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: "Sparta's deep understanding of the Nakasero CBD was instrumental in our regional headquarters relocation. Their professionalism is unmatched in Kampala.",
    author: "Edward K. Musoke",
    role: "CEO",
    company: "Standard Chartered Regional Office"
  },
  {
    id: '2',
    content: "We've entrusted our industrial portfolio to Sparta for three years. Their facility management team is responsive, technical, and highly efficient.",
    author: "Anita Birungi",
    role: "Director of Operations",
    company: "Uganda Breweries Limited"
  }
];

