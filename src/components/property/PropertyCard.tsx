'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Maximize2, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Property, ListingStatus } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const isLeased = property.status === ListingStatus.LEASED;
  const isSold = property.status === ListingStatus.SOLD;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/properties/${property.id}`} 
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-corporate-slate aspect-[4/3] mb-6">
        {/* Image Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-slate to-gray-200 animate-pulse"></div>
        )}
        
        {/* Main Image */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={property.images[0] || '/images/properties/property-office-1.jpg'} 
            alt={property.title} 
            fill
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'grayscale-0' : 'grayscale-[0.15]'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            onError={(e) => {
              // Fallback to default property image if image fails to load
              const target = e.target as HTMLImageElement;
              if (target.src !== '/images/properties/property-office-1.jpg') {
                target.src = '/images/properties/property-office-1.jpg';
              }
            }}
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg ${
              isLeased || isSold ? 'bg-red-600/90' : 
              property.status === ListingStatus.FOR_SALE ? 'bg-green-600/90' : 
              'bg-corporate-navy/90'
            } backdrop-blur-sm`}
          >
            {property.status}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/95 backdrop-blur-sm px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-corporate-navy border-l-2 border-corporate-blue"
          >
            {property.category || property.type}
          </motion.span>
        </div>
        
        {/* Hover Overlay - Premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-corporate-navy/40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: isHovered ? 1 : 0, 
              rotate: isHovered ? 0 : -180 
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-16 rounded-full bg-corporate-blue/95 backdrop-blur-sm flex items-center justify-center text-white shadow-premium group-hover:bg-corporate-blue"
          >
            <ArrowRight size={24} strokeWidth={2.5} />
          </motion.div>
        </motion.div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-corporate-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-2 right-2 w-0 h-0 border-t-[12px] border-t-corporate-blue border-l-[12px] border-l-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-2">
        {/* Location */}
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-corporate-blue mb-3 font-sans">
          <div className="w-5 h-5 rounded-full bg-corporate-blue/10 flex items-center justify-center">
            <MapPin size={12} strokeWidth={2.5} className="text-corporate-blue" />
          </div>
          <span className="truncate">{property.location}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-corporate-navy group-hover:text-corporate-blue transition-colors duration-300 mb-4 sm:mb-6 leading-tight line-clamp-2 min-h-[3.5rem] sm:min-h-[4rem]">
          {property.title}
        </h3>
        
        {/* Details Bar */}
        <div className="flex justify-between items-end border-t border-gray-100 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider text-gray-500 mb-1.5 font-semibold font-sans">
                {property.size ? 'Size' : 'Total Space'}
              </span>
              <div className="flex items-center gap-2 text-corporate-navy font-bold">
                <div className="w-6 h-6 rounded bg-corporate-blue/10 flex items-center justify-center">
                  <Maximize2 size={14} className="text-corporate-blue" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-serif">
                  {property.size || (property.sqm ? `${property.sqm.toLocaleString()} SQM` : 'N/A')}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-right flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-wider text-gray-500 mb-1.5 font-semibold font-sans">
              Price
            </span>
            <div className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-corporate-navy leading-none">
              {property.price}
              {property.priceType && property.priceType !== 'total' && (
                <span className="text-[11px] font-normal text-gray-600 ml-1 font-sans">
                  /{property.priceType}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Code Badge */}
        {property.code && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
              Code: <span className="text-corporate-blue">{property.code}</span>
            </span>
          </div>
        )}

        {/* Hover Indicator Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.4 }}
          className="h-0.5 bg-corporate-blue mt-6"
        />
      </div>
    </Link>
  );
};

export default PropertyCard;

