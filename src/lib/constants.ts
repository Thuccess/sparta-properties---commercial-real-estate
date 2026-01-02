
import { Property, PropertyType, ListingStatus, Service, Testimonial } from '../types/property';

export const COMPANY_NAME = "Sparta Properties LTD";
export const COMPANY_WHATSAPP = "+256 701 348819";
export const COMPANY_PHONE = "+256 701 348819";
export const COMPANY_PHONE_2 = "+256 782 758728";
export const COMPANY_EMAIL = "info@spartaproperties.co.ug";
export const COMPANY_ADDRESS = "Byandala Nankya complex, Block 7, Katwe";
export const COMPANY_PO_BOX = "P.O. Box 115798, Kampala, Uganda";

// WhatsApp helper function
export const formatWhatsAppMessage = (message: string): string => {
  return encodeURIComponent(message);
};

export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${COMPANY_WHATSAPP.replace(/[^0-9]/g, '')}?text=${formatWhatsAppMessage(message)}`;
};

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    code: '186951',
    title: 'Residential Land for sale in Buwaate Wakiso',
    location: 'Buwaate',
    district: 'Wakiso',
    price: 'UGX 350,000,000/=',
    priceType: 'total',
    type: PropertyType.LAND,
    category: 'Residential Land',
    size: '33 Decimals',
    tenure: 'Mailo Land',
    status: ListingStatus.FOR_SALE,
    inspectionFee: true,
    phone: '+256701348819',
    description: 'This beautiful piece of land is the perfect opportunity for those looking to start up projects. It is located just few meters from the main road, which allows easy access to many of the amenities the area has to offer. Electricity and water supply are readily available to this land, making it an ideal option for those looking to invest. The asking price is UGX 350,000,000 shillings, which is negotiable.\n\nThe land tenure is Mailo land, and the size is 33 decimals, giving you plenty of room to build whatever you need, for projects like apartments, hotels, residentials, rentals, condos, among others. There is plenty of opportunity in the area, and with the added amenities of electricity and water supply, this piece of land is sure to be a great investment.\n\nThis beautiful piece of land is sure to be the perfect opportunity for those looking to start up a project. With the convenient location just few meters from the main road, the negotiable asking price, and the included amenities of electricity and water supply, this land is sure to be a great investment. Don\'t miss out on this great opportunity and contact us today to find out more!',
    images: [
      '/images/properties/property-office-1.jpg',
      '/images/properties/property-office-2.jpg'
    ],
    amenities: ['Electricity Available', 'Water Supply', 'Near Main Road', 'Google Map Pin'],
    highlights: ['Negotiable Price', 'Prime Location', 'Development Ready'],
    googleMapPin: 'https://www.google.com/maps/search/?api=1&query=Buwaate+Wakiso',
    agent: {
      name: 'Sparta',
      phone: '+256701348819',
      email: 'info@spartaproperties.co.ug',
      image: '/images/logo.png'
    }
  },
  {
    id: '4',
    code: '186954',
    title: 'Luxury Condominiums for Sale',
    location: 'Kololo',
    district: 'Kampala',
    price: 'UGX 850,000,000/=',
    priceType: 'total',
    type: PropertyType.RESIDENTIAL,
    category: 'Luxury Condominiums',
    sqm: 180,
    status: ListingStatus.FOR_SALE,
    inspectionFee: true,
    phone: '+256701348819',
    description: 'Premium luxury condominiums in the heart of Kololo, Kampala\'s most prestigious neighborhood. These beautifully designed units feature modern architecture, high-end finishes, and panoramic city views. Each unit includes spacious living areas, modern kitchens, elegant bathrooms, and private balconies.\n\nThe development offers world-class amenities including 24/7 security, concierge services, swimming pool, fitness center, and beautifully landscaped gardens. Located in a prime location with easy access to shopping, dining, and business districts.\n\nPerfect for investors seeking premium rental yields or homeowners looking for luxury living in Kampala\'s most desirable location.',
    images: [
      '/images/properties/property-retail-1.jpg',
      '/images/properties/property-retail-2.jpg'
    ],
    amenities: ['24/7 Security', 'Swimming Pool', 'Fitness Center', 'Concierge Service', 'Parking', 'Modern Finishes'],
    highlights: ['Prime Location', 'Luxury Living', 'High Rental Yield'],
    agent: {
      name: 'Sparta',
      phone: '+256701348819',
      email: 'info@spartaproperties.co.ug',
      image: '/images/logo.png'
    }
  },
  {
    id: '5',
    code: '186955',
    title: 'Furnished Bungalows/Apartments for Rent',
    location: 'Bugolobi',
    district: 'Kampala',
    price: 'UGX 2,500,000/=',
    priceType: 'per month',
    type: PropertyType.RESIDENTIAL,
    category: 'Furnished Bungalows/Apartments',
    sqm: 120,
    status: ListingStatus.AVAILABLE,
    inspectionFee: false,
    phone: '+256701348819',
    description: 'Beautifully furnished bungalows and apartments available for rent in Bugolobi, one of Kampala\'s most sought-after residential areas. These fully furnished units are move-in ready and perfect for professionals, expatriates, or families seeking comfortable, modern living.\n\nEach unit is tastefully furnished with quality furniture, modern appliances, and all necessary amenities. The properties feature spacious bedrooms, well-equipped kitchens, comfortable living areas, and private outdoor spaces. The location offers easy access to schools, shopping centers, restaurants, and major business districts.\n\nAvailable for both short-term and long-term rentals with flexible lease terms. Utilities and maintenance included.',
    images: [
      '/images/properties/property-office-1.jpg',
      '/images/properties/property-retail-1.jpg'
    ],
    amenities: ['Fully Furnished', 'Modern Appliances', 'Parking', 'Security', 'Utilities Included', 'Garden'],
    highlights: ['Move-in Ready', 'Prime Location', 'Flexible Terms'],
    agent: {
      name: 'Sparta',
      phone: '+256701348819',
      email: 'info@spartaproperties.co.ug',
      image: '/images/logo.png'
    }
  },
  {
    id: '6',
    code: '186956',
    title: 'Furnished City Apartments',
    location: 'Nakasero',
    district: 'Kampala',
    price: 'UGX 3,000,000/=',
    priceType: 'per month',
    type: PropertyType.RESIDENTIAL,
    category: 'Furnished City Apartments',
    sqm: 95,
    status: ListingStatus.AVAILABLE,
    inspectionFee: false,
    phone: '+256701348819',
    description: 'Stylish furnished city apartments in the heart of Nakasero, Kampala\'s central business district. These modern apartments are perfect for professionals working in the city center who value convenience and comfort.\n\nThe apartments feature contemporary design, high-quality furnishings, modern kitchens with appliances, comfortable bedrooms, and elegant bathrooms. Located within walking distance of offices, restaurants, cafes, and shopping areas. The building offers 24/7 security, elevator access, and professional property management.\n\nIdeal for corporate housing, short-term stays, or long-term rentals. All utilities and internet included in the rent.',
    images: [
      '/images/properties/property-retail-2.jpg',
      '/images/properties/property-office-2.jpg'
    ],
    amenities: ['Fully Furnished', 'City Center Location', '24/7 Security', 'Elevator', 'Internet Included', 'Modern Design'],
    highlights: ['CBD Location', 'Walk to Work', 'All Inclusive'],
    agent: {
      name: 'Sparta',
      phone: '+256701348819',
      email: 'info@spartaproperties.co.ug',
      image: '/images/logo.png'
    }
  },
  {
    id: '2',
    code: '186952',
    title: 'Nakasero Grade A Office Complex',
    location: 'Nakasero Hill',
    district: 'Kampala',
    price: '$22',
    priceType: 'per sqm',
    type: PropertyType.OFFICE,
    category: 'Office Space',
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
      name: 'Sparta',
      phone: '+256701348819',
      email: 'info@spartaproperties.co.ug',
      image: '/images/logo.png'
    }
  },
  {
    id: '3',
    code: '186953',
    title: 'Naguru Retail & Medical Pavilion',
    location: 'Naguru',
    district: 'Kampala',
    price: '$18',
    priceType: 'per sqm',
    type: PropertyType.RETAIL,
    category: 'Retail Space',
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
      name: 'Sparta',
      phone: '+256701348819',
      email: 'info@spartaproperties.co.ug',
      image: '/images/logo.png'
    }
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 'property-management',
    title: 'Property Management',
    description: 'Comprehensive property management services ensuring optimal performance and value retention for your real estate investments.',
    icon: 'Settings',
    fullContent: 'Sparta Properties provides professional property management services that cover all aspects of maintaining and operating your property. Our experienced team handles day-to-day operations, tenant relations, maintenance coordination, financial reporting, and strategic planning to maximize your property\'s value and returns. We offer 2 months of free property management to new clients as part of our commitment to excellence.'
  },
  {
    id: 'tenant-placement',
    title: 'Tenant Placement',
    description: 'Strategic tenant matching and placement services to ensure optimal occupancy and rental income.',
    icon: 'Users',
    fullContent: 'Our tenant placement service focuses on finding the right tenants for your properties. We conduct thorough tenant screening, background checks, and credit verification to ensure reliable, long-term tenants. Our extensive network and marketing expertise help minimize vacancy periods and maximize rental yields.'
  },
  {
    id: 'property-sale-purchase',
    title: 'Property Sale and Purchase',
    description: 'Expert guidance through property transactions, from initial valuation to successful closing.',
    icon: 'Handshake',
    fullContent: 'Whether you\'re buying or selling, Sparta Properties provides comprehensive support throughout the entire transaction process. Our services include property valuation, market analysis, negotiation, due diligence, legal documentation, and transaction management. We ensure transparent, efficient, and successful property transactions.'
  },
  {
    id: 'land-title-processing',
    title: 'Land Title Processing',
    description: 'Professional assistance with land title registration, transfers, and documentation.',
    icon: 'FileCheck',
    fullContent: 'Navigating land title processes in Uganda can be complex. Our team specializes in land title processing, including title searches, transfers, subdivisions, and registration. We work closely with relevant government agencies to ensure all documentation is properly processed and your property rights are secured.'
  },
  {
    id: 'property-listing-marketing',
    title: 'Property Listing and Marketing',
    description: 'Strategic marketing and listing services to maximize property visibility and attract qualified buyers or tenants.',
    icon: 'TrendingUp',
    fullContent: 'Our property listing and marketing services ensure your property reaches the right audience. We utilize multiple channels including online platforms, social media, print media, and our extensive network of contacts. Professional photography, virtual tours, and compelling descriptions help showcase your property\'s best features and attract qualified prospects.'
  },
  {
    id: 'management-system',
    title: 'Management System',
    description: 'Advanced property management system for streamlined operations and comprehensive oversight.',
    icon: 'Server',
    fullContent: 'Sparta Properties offers a sophisticated management system that provides real-time insights into your property portfolio. Our system tracks occupancy, rent collection, maintenance requests, financial performance, and tenant communications, all in one centralized platform. This enables data-driven decision-making and efficient property management.'
  },
  {
    id: 'real-estate-agency',
    title: 'Real Estate Agency',
    description: 'Full-service real estate agency providing comprehensive property solutions.',
    icon: 'Building2',
    fullContent: 'As a licensed real estate agency, Sparta Properties offers a complete range of real estate services. From property sales and rentals to property management and investment advisory, we serve as your trusted partner in all real estate matters. Our team combines local expertise with professional standards to deliver exceptional results.'
  },
  {
    id: 'property-remodeling',
    title: 'Property Remodeling',
    description: 'Professional property remodeling and renovation services to enhance property value and appeal.',
    icon: 'Wrench',
    fullContent: 'Transform your property with our professional remodeling services. We handle everything from design consultation to project management and execution. Whether it\'s a complete renovation or targeted improvements, our team ensures high-quality workmanship, timely completion, and enhanced property value. We work with trusted contractors and suppliers to deliver exceptional results.'
  },
  {
    id: 'feasibility-study',
    title: 'Feasibility Study',
    description: 'Comprehensive feasibility studies to assess project viability and investment potential.',
    icon: 'BarChart3',
    fullContent: 'Before making significant real estate investments, our feasibility studies provide critical insights into project viability. We analyze market conditions, financial projections, regulatory requirements, and potential risks. Our detailed reports help investors and developers make informed decisions and optimize their investment strategies.'
  },
  {
    id: 'sparta-credit',
    title: 'Sparta Credit',
    description: 'Reliable and simple financing solutions for your real estate needs.',
    icon: 'Wallet',
    fullContent: 'Sparta Credit provides accessible financing solutions for real estate transactions. Whether you need funding for property purchase, development, or renovation, we offer flexible terms and competitive rates. Our streamlined application process and quick approval make it easy to access the capital you need for your real estate investments.'
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

