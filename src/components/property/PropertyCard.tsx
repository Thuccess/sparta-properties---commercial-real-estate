
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Maximize2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Property, ListingStatus } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const isLeased = property.status === ListingStatus.LEASED;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/properties/${property.id}`} className="block group">
      <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-corporate-slate">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-corporate-slate animate-pulse"></div>
        )}
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={property.images[0]} 
          alt={property.title} 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute top-0 left-0 p-4 flex flex-col gap-2">
          <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl ${
            isLeased ? 'bg-red-700' : 'bg-corporate-navy'
          }`}>
            {property.status}
          </span>
          <span className="bg-white/90 backdrop-blur px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-corporate-navy border-l-2 border-corporate-gold">
            {property.type}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-corporate-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-corporate-navy scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

      <div className="px-1">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-corporate-gold mb-3">
          <MapPin size={10} strokeWidth={3} />
          <span className="truncate">{property.location}</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-corporate-navy group-hover:text-corporate-gold transition-colors duration-300 mb-6 line-clamp-2 min-h-[3.5rem]">
          {property.title}
        </h3>
        
        <div className="flex justify-between items-end border-t border-gray-100 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Total Space</span>
              <div className="flex items-center gap-2 text-corporate-navy font-bold">
                <Maximize2 size={12} className="text-corporate-gold" />
                <span className="text-sm">{property.sqm} <span className="text-[10px] font-normal">SQM</span></span>
              </div>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Starting At</span>
            <div className="text-xl font-serif font-bold text-corporate-navy leading-none">
              {property.price}<span className="text-[10px] font-sans font-normal ml-1">/{property.priceType}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

