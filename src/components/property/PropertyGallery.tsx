'use client';

import React, { useState } from 'react';
import { ListingStatus } from '../../types/property';

interface PropertyGalleryProps {
  images: string[];
  title: string;
  status: ListingStatus;
  activeImage?: number;
  onImageChange?: (index: number) => void;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title, status, activeImage = 0, onImageChange }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="space-y-6">
      <div className="aspect-[16/9] bg-corporate-slate overflow-hidden relative group">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-corporate-slate animate-pulse"></div>
        )}
        <img 
          src={images[activeImage]} 
          alt={title} 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {status === ListingStatus.LEASED && (
          <div className="absolute inset-0 bg-corporate-navy/60 backdrop-blur-sm flex items-center justify-center">
            <span className="text-5xl font-serif italic text-white border-y border-white/30 py-4 px-12 uppercase tracking-widest">Leased Asset</span>
          </div>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {images.map((img, idx) => (
          <button 
            key={idx} 
            onClick={() => onImageChange?.(idx)}
            className={`shrink-0 w-32 aspect-[4/3] overflow-hidden border-2 transition-all duration-300 ${
              activeImage === idx ? 'border-corporate-gold' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;

