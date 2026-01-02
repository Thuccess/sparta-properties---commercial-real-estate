'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, Maximize2, Check, ArrowLeft, 
  Share2, Heart, Phone, Mail, Building2, ShieldCheck, Zap, MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { getPropertyById } from '../../../data/properties';
import { ListingStatus } from '../../../types/property';
import PropertyGallery from '../../../components/property/PropertyGallery';

export default function PropertyDetails() {
  const params = useParams();
  const id = params?.id as string;
  const property = getPropertyById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    // Check if property is saved
    if (id) {
      const saved = localStorage.getItem(`saved-property-${id}`);
      setIsSaved(saved === 'true');
    }
  }, [id]);
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    const url = window.location.href;
    const title = property?.title || 'Property Listing';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      // You could show a toast here
    }
    setIsSharing(false);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // In a real app, this would save to localStorage or backend
    if (!isSaved) {
      localStorage.setItem(`saved-property-${id}`, 'true');
    } else {
      localStorage.removeItem(`saved-property-${id}`);
    }
  };

  if (!property) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-corporate-navy mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-corporate-blue hover:underline">
            Return to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-corporate-navy pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 text-white/50 text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/properties" className="flex items-center gap-1.5 sm:gap-2 hover:text-corporate-blue transition-colors text-[9px] sm:text-[10px]">
            <ArrowLeft size={11} className="sm:w-3 sm:h-3" /> <span className="hidden sm:inline">Return to Portfolio</span><span className="sm:hidden">Back</span>
          </Link>
          <div className="flex gap-4 sm:gap-6">
            <button 
              onClick={handleShare}
              disabled={isSharing}
              className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors disabled:opacity-50 text-[9px] sm:text-[10px]"
            >
              <Share2 size={11} className="sm:w-3 sm:h-3" /> <span className="hidden sm:inline">{isSharing ? 'Sharing...' : 'Share'}</span>
            </button>
            <button 
              onClick={handleSave}
              className={`flex items-center gap-1.5 sm:gap-2 transition-colors text-[9px] sm:text-[10px] ${
                isSaved ? 'text-corporate-blue' : 'hover:text-white'
              }`}
            >
              <Heart size={11} className={`sm:w-3 sm:h-3 ${isSaved ? 'fill-current' : ''}`} /> <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                 {property.code && (
                   <span className="bg-corporate-blue text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                     Code: {property.code}
                   </span>
                 )}
                 <span className="text-corporate-navy text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                   <div className="w-5 h-5 rounded bg-corporate-blue/10 flex items-center justify-center">
                     <Building2 size={14} className="text-corporate-blue" strokeWidth={2} />
                   </div>
                   {property.category || property.type}
                 </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-corporate-navy mb-3 sm:mb-4 md:mb-6 tracking-tighter">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-500 font-medium">
                <div className="w-8 h-8 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-2 sm:mr-3">
                  <MapPin size={18} className="text-corporate-blue" strokeWidth={2.5} />
                </div>
                <span className="text-base sm:text-lg md:text-xl">
                  {property.location}
                  {property.district && `, ${property.district}`}
                  {property.district === 'Wakiso' && ', Uganda'}
                </span>
              </div>
            </motion.div>

            {/* Gallery */}
            <div className="mb-16">
              <PropertyGallery 
                images={property.images} 
                title={property.title} 
                status={property.status}
                activeImage={activeImage}
                onImageChange={setActiveImage}
              />
            </div>

            {/* Quick Summary */}
            <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 mb-10 sm:mb-12 md:mb-16 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-corporate-navy mb-4 sm:mb-6 md:mb-8">QUICK SUMMARY</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {property.code && (
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Code</div>
                    <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.code}</div>
                  </div>
                )}
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Location</div>
                  <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.location}</div>
                </div>
                {property.district && (
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">District</div>
                    <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.district}</div>
                  </div>
                )}
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Price</div>
                  <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.price}</div>
                </div>
                {property.category && (
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Category</div>
                    <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.category}</div>
                  </div>
                )}
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Size</div>
                  <div className="text-base sm:text-lg font-bold text-corporate-navy">
                    {property.size || (property.sqm ? `${property.sqm.toLocaleString()} SQM` : 'N/A')}
                  </div>
                </div>
                {property.tenure && (
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Tenure</div>
                    <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.tenure}</div>
                  </div>
                )}
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Status</div>
                  <div className={`text-base sm:text-lg font-bold ${
                    property.status === ListingStatus.LEASED || property.status === 'Sold' ? 'text-red-600' : 
                    property.status === 'For sale' ? 'text-green-600' : 'text-corporate-blue'
                  }`}>
                    {property.status}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Agent</div>
                  <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.agent.name}</div>
                </div>
                {(property.phone || property.agent.phone) && (
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Call</div>
                    <a 
                      href={`tel:${property.phone || property.agent.phone}`}
                      className="text-base sm:text-lg font-bold text-corporate-blue hover:underline"
                    >
                      {property.phone || property.agent.phone}
                    </a>
                  </div>
                )}
                {property.inspectionFee !== undefined && (
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Inspection fee</div>
                    <div className="text-base sm:text-lg font-bold text-corporate-navy">{property.inspectionFee ? 'Yes' : 'No'}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Description Sections */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
               <div className="md:col-span-8 space-y-8 sm:space-y-10 md:space-y-12">
                  <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-corporate-navy mb-4 sm:mb-6">DESCRIPTION</h2>
                    <div className="text-base sm:text-lg text-gray-600 leading-relaxed font-light space-y-4">
                      {property.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-corporate-navy mb-4 sm:mb-6">AMENITIES</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                      {property.amenities.filter(a => !a.toLowerCase().includes('google map')).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-corporate-slate border-l-4 border-corporate-blue hover:bg-corporate-blue/5 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-corporate-blue/10 flex items-center justify-center shrink-0">
                            <Check size={14} className="text-corporate-blue" strokeWidth={3} />
                          </div>
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-corporate-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                    {property.googleMapPin && (
                      <div className="mt-6">
                    <a
                      href={property.googleMapPin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-corporate-blue text-white rounded-lg hover:bg-corporate-blue-dark transition-all font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <MapPin size={18} strokeWidth={2.5} />
                      </div>
                      <span>View on Google Maps</span>
                    </a>
                      </div>
                    )}
                  </section>
               </div>
               
               <div className="md:col-span-4 space-y-6 sm:space-y-8 md:space-y-10">
                  <div className="p-6 sm:p-8 bg-corporate-navy text-white rounded-sm">
                    <h3 className="text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-6 text-corporate-blue">Asset Highlights</h3>
                    <ul className="space-y-4 sm:space-y-6">
                      {property.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 sm:gap-4 group/item">
                          <div className="w-6 h-6 rounded-full bg-corporate-blue/20 flex items-center justify-center shrink-0 group-hover/item:bg-corporate-blue/30 transition-colors">
                            <ShieldCheck size={14} className="text-corporate-blue" strokeWidth={2.5} />
                          </div>
                          <span className="text-[10px] sm:text-xs font-medium text-white/70 tracking-wide leading-relaxed group-hover/item:text-white transition-colors">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 sm:p-8 border border-gray-100 flex flex-col items-center text-center hover:border-corporate-blue/30 transition-colors group">
                    <div className="w-16 h-16 rounded-2xl bg-corporate-blue/10 border-2 border-corporate-blue/20 flex items-center justify-center mb-4 group-hover:bg-corporate-blue/20 group-hover:scale-110 transition-all">
                      <Zap size={28} className="text-corporate-blue" strokeWidth={2} />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">Technical Dossier</h4>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 mb-4 sm:mb-6 uppercase tracking-wider font-bold leading-relaxed">Detailed floor plans and MEP specifications available upon request.</p>
                    <a 
                      href={`mailto:${property.agent.email}?subject=Request for Technical Dossier - ${property.title}`}
                      className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-corporate-navy border-b border-corporate-blue pb-1 hover:text-corporate-blue transition-colors inline-block"
                    >
                      Request Brochure
                    </a>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Inquiry */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-40 space-y-6 sm:space-y-8 md:space-y-10">
              {/* Agent Profile */}
              <div className="bg-corporate-slate p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover grayscale shrink-0" />
                  <div>
                    <div className="font-serif font-bold text-lg sm:text-xl text-corporate-navy leading-none mb-1 sm:mb-2">{property.agent.name}</div>
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-corporate-blue">Lead Asset Specialist</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                   <a 
                     href={`https://wa.me/256701348819?text=${encodeURIComponent(`Hello! I'm interested in: ${property.title}\nLocation: ${property.location}`)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-[#25D366] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-[#20BA5A] transition-all shadow-lg"
                   >
                     <MessageCircle size={12} className="sm:w-[14px] sm:h-[14px]" /> WhatsApp
                   </a>
                   <a 
                     href={`tel:+256701348819`} 
                     className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-white border border-gray-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:border-corporate-blue transition-all"
                   >
                     <Phone size={12} className="sm:w-[14px] sm:h-[14px] text-corporate-blue" /> Call
                   </a>
                </div>
              </div>

              {/* WhatsApp Booking */}
              <div className="bg-white p-6 sm:p-8 md:p-10 border border-gray-100 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366]"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-corporate-navy">Book a Viewing</h3>
                    <p className="text-xs text-gray-600">Instant response via WhatsApp</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <a
                    href={`https://wa.me/256701348819?text=${encodeURIComponent(`Hello! I'm interested in viewing: ${property.title}\n\nLocation: ${property.location}\n\nPlease let me know your available viewing times.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle size={18} />
                    Book via WhatsApp
                  </a>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">Or use the floating WhatsApp button</p>
                    <p className="text-[10px] text-gray-400">We respond within minutes</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">Property Details</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property:</span>
                      <span className="font-semibold">{property.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold">{property.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Size:</span>
                      <span className="font-semibold">
                        {property.size || (property.sqm ? `${property.sqm.toLocaleString()} SQM` : 'N/A')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold">
                        {property.price}
                        {property.priceType && property.priceType !== 'total' && `/${property.priceType}`}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-6 text-[9px] text-gray-400 text-center leading-relaxed italic uppercase font-bold tracking-widest">Confidentiality Assured</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

