'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, LayoutGrid, List as ListIcon, ChevronDown, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PROPERTIES } from '../../lib/constants';
import { PropertyType, ListingStatus } from '../../types/property';
import PropertyCard from '../../components/property/PropertyCard';
import PropertyFilters from '../../components/property/PropertyFilters';

export default function Properties() {
  const [activeType, setActiveType] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      const matchesType = activeType === 'All' || p.type === activeType;
      const matchesStatus = activeStatus === 'All' || p.status === activeStatus;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesStatus && matchesSearch;
    });
  }, [activeType, activeStatus, searchQuery]);

  return (
    <div className="bg-corporate-slate min-h-screen">
      {/* Header */}
      <div className="bg-corporate-navy text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-corporate-gold/5 -skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="text-corporate-gold text-[11px] font-bold uppercase tracking-[0.5em] mb-6">Portfolio</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Commercial Assets</h1>
            <p className="text-xl text-white/50 max-w-2xl font-light">
              Exclusive listings of Grade-A office spaces, specialized industrial facilities, and prime retail pavilions across the metropolitan Kampala region.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="sticky top-16 lg:top-[6.5rem] z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-grow max-w-xl relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-corporate-gold transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, district, or landmark..." 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:bg-white focus:border-corporate-gold transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center space-x-3 px-6 py-4 border text-xs font-bold uppercase tracking-widest transition-all ${
                  isFilterOpen ? 'bg-corporate-navy text-white border-corporate-navy' : 'bg-white text-corporate-navy border-gray-200 hover:border-corporate-gold'
                }`}
              >
                <SlidersHorizontal size={16} />
                <span>Filter Assets</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="hidden sm:flex items-center border border-gray-200 h-[52px] rounded-sm overflow-hidden">
                <button 
                  className="px-4 text-corporate-navy hover:text-corporate-gold hover:bg-corporate-slate transition-all h-full"
                  title="Grid View"
                  aria-label="Grid View"
                >
                  <LayoutGrid size={18} />
                </button>
                <div className="w-px h-6 bg-gray-200"></div>
                <button 
                  className="px-4 text-gray-300 hover:text-corporate-gold hover:bg-corporate-slate transition-all h-full"
                  title="List View (Coming Soon)"
                  aria-label="List View"
                  disabled
                >
                  <ListIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-corporate-slate border-b border-gray-200"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <PropertyFilters
                  activeType={activeType}
                  activeStatus={activeStatus}
                  onTypeChange={setActiveType}
                  onStatusChange={setActiveStatus}
                  onReset={() => { setActiveType('All'); setActiveStatus('All'); setSearchQuery(''); }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Showing <span className="text-corporate-navy">{filteredProperties.length}</span> Results
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredProperties.map(property => (
              <motion.div layout key={property.id}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white py-40 flex flex-col items-center text-center border border-gray-100 rounded-sm"
          >
            <div className="w-20 h-20 bg-corporate-slate rounded-full flex items-center justify-center text-gray-300 mb-8">
              <Building2 size={40} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-corporate-navy mb-4">No assets match your search</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8 font-light leading-relaxed">
              We frequently have off-market opportunities not listed publicly. Contact our advisory team directly for a confidential inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-corporate-navy text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-corporate-gold transition-all shadow-lg hover:shadow-xl"
              >
                Contact Advisory Team
              </Link>
              <button 
                onClick={() => { setActiveType('All'); setActiveStatus('All'); setSearchQuery(''); }}
                className="bg-white border-2 border-corporate-navy text-corporate-navy px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-corporate-slate transition-all"
              >
                Clear All Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

