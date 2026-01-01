'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, Maximize2, Check, ArrowLeft, 
  Share2, Heart, Phone, Mail, Building2, ShieldCheck, Zap
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
          <Link href="/properties" className="text-corporate-gold hover:underline">
            Return to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-corporate-navy pt-32 pb-6 text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <Link href="/properties" className="flex items-center gap-2 hover:text-corporate-gold transition-colors">
            <ArrowLeft size={12} /> Return to Portfolio
          </Link>
          <div className="flex gap-6">
            <button 
              onClick={handleShare}
              disabled={isSharing}
              className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-50"
            >
              <Share2 size={12} /> {isSharing ? 'Sharing...' : 'Share'}
            </button>
            <button 
              onClick={handleSave}
              className={`flex items-center gap-2 transition-colors ${
                isSaved ? 'text-corporate-gold' : 'hover:text-white'
              }`}
            >
              <Heart size={12} className={isSaved ? 'fill-current' : ''} /> {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                 <span className="bg-corporate-gold text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                   Premium Offering
                 </span>
                 <span className="text-corporate-navy text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                   <Building2 size={12} /> {property.type}
                 </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-corporate-navy mb-6 tracking-tighter">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-500 font-medium">
                <MapPin size={18} className="text-corporate-gold mr-3" />
                <span className="text-xl">{property.location}</span>
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

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 mb-16 overflow-hidden shadow-sm">
              <div className="bg-white p-8">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Occupancy Status</div>
                <div className={`text-lg font-bold ${property.status === ListingStatus.LEASED ? 'text-red-600' : 'text-green-600'}`}>
                  {property.status}
                </div>
              </div>
              <div className="bg-white p-8">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Indicative Pricing</div>
                <div className="text-lg font-bold text-corporate-navy">{property.price}<span className="text-xs font-normal">/{property.priceType}</span></div>
              </div>
              <div className="bg-white p-8">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Total Enclosed Area</div>
                <div className="text-lg font-bold text-corporate-navy">{property.sqm} <span className="text-xs font-normal">SQM</span></div>
              </div>
              <div className="bg-white p-8">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Tenure Type</div>
                <div className="text-lg font-bold text-corporate-navy">Leasehold</div>
              </div>
            </div>

            {/* Description Sections */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
               <div className="md:col-span-8 space-y-12">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-corporate-navy mb-6">Executive Summary</h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      {property.description}
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-corporate-navy mb-6">Key Specifications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {property.amenities.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-corporate-slate border-l-2 border-corporate-gold">
                          <Check size={14} className="text-corporate-gold" />
                          <span className="text-xs font-bold uppercase tracking-widest text-corporate-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
               </div>
               
               <div className="md:col-span-4 space-y-10">
                  <div className="p-8 bg-corporate-navy text-white rounded-sm">
                    <h3 className="text-xl font-serif font-bold mb-6 text-corporate-gold">Asset Highlights</h3>
                    <ul className="space-y-6">
                      {property.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4">
                          <ShieldCheck size={18} className="text-corporate-gold shrink-0" />
                          <span className="text-xs font-medium text-white/70 tracking-wide leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-8 border border-gray-100 flex flex-col items-center text-center">
                    <Zap size={24} className="text-corporate-gold mb-4" />
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Technical Dossier</h4>
                    <p className="text-[10px] text-gray-400 mb-6 uppercase tracking-wider font-bold leading-relaxed">Detailed floor plans and MEP specifications available upon request.</p>
                    <a 
                      href={`mailto:${property.agent.email}?subject=Request for Technical Dossier - ${property.title}`}
                      className="text-[10px] font-bold uppercase tracking-widest text-corporate-navy border-b border-corporate-gold pb-1 hover:text-corporate-gold transition-colors inline-block"
                    >
                      Request Brochure
                    </a>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Inquiry */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-10">
              {/* Agent Profile */}
              <div className="bg-corporate-slate p-8 border border-gray-100">
                <div className="flex items-center gap-6 mb-8">
                  <img src={property.agent.image} alt={property.agent.name} className="w-20 h-20 rounded-full object-cover grayscale" />
                  <div>
                    <div className="font-serif font-bold text-xl text-corporate-navy leading-none mb-2">{property.agent.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-corporate-gold">Lead Asset Specialist</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   <a href={`tel:${property.agent.phone}`} className="flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest hover:border-corporate-gold transition-all">
                     <Phone size={14} className="text-corporate-gold" /> Call Office
                   </a>
                   <a href={`mailto:${property.agent.email}`} className="flex items-center justify-center gap-3 py-4 bg-corporate-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-corporate-gold transition-all">
                     <Mail size={14} className="text-corporate-gold" /> Send Brief
                   </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white p-10 border border-gray-100 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-corporate-gold"></div>
                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-8">Request Portfolio View</h3>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                    const formData = new FormData(e.currentTarget);
                    const email = formData.get('email') as string;
                    window.location.href = `mailto:${property.agent.email}?subject=Portfolio View Request - ${property.title}&body=Hello, I would like to schedule a viewing for ${property.title}.%0D%0A%0D%0AEmail: ${email}`;
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-corporate-slate px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-corporate-gold border-none" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Corporate Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-corporate-slate px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-corporate-gold border-none" 
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Timeline</label>
                    <select 
                      name="timeline"
                      className="w-full bg-corporate-slate px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-corporate-gold border-none appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-10"
                    >
                       <option>Immediate Occupancy</option>
                       <option>Within 3 Months</option>
                       <option>Within 6 Months</option>
                       <option>Strategic Planning (6+ months)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Specific Requirements</label>
                    <textarea 
                      rows={4} 
                      name="requirements"
                      className="w-full bg-corporate-slate px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-corporate-gold border-none resize-none"
                      placeholder="Space requirements, budget range, etc."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-6 bg-corporate-navy text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-corporate-gold transition-all"
                  >
                    Register Interest
                  </button>
                </form>
                <p className="mt-8 text-[9px] text-gray-400 text-center leading-relaxed italic uppercase font-bold tracking-widest">Confidentiality Assured</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

