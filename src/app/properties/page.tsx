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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLocation, setActiveLocation] = useState<string>('All');
  const [activeUsage, setActiveUsage] = useState<string>('All');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minSize, setMinSize] = useState<string>('');
  const [sizeUnit, setSizeUnit] = useState<string>('Decimals');
  const [keyword, setKeyword] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      // Type filter
      const matchesType = activeType === 'All' || p.type === activeType;
      
      // Status filter
      const matchesStatus = activeStatus === 'All' || p.status === activeStatus || 
                           (activeStatus === 'For sale' && p.status === 'For sale');
      
      // Category filter
      const matchesCategory = activeCategory === 'All' || 
                             (p.category && p.category.toLowerCase().includes(activeCategory.toLowerCase())) ||
                             (!p.category && activeCategory === 'All');
      
      // Location filter
      const matchesLocation = activeLocation === 'All' || 
                             p.location.toLowerCase().includes(activeLocation.toLowerCase()) ||
                             (p.district && p.district.toLowerCase().includes(activeLocation.toLowerCase()));
      
      // Usage filter (based on type/category)
      const matchesUsage = activeUsage === 'All' || 
                          (activeUsage === 'Residential' && (p.type === PropertyType.RESIDENTIAL || p.type === PropertyType.LAND || (p.category && p.category.toLowerCase().includes('residential')))) ||
                          (activeUsage === 'Commercial' && (p.type === PropertyType.OFFICE || p.type === PropertyType.RETAIL || (p.category && p.category.toLowerCase().includes('commercial')))) ||
                          (activeUsage === 'Industrial' && p.type === PropertyType.INDUSTRIAL);
      
      // Price filter
      let matchesPrice = true;
      if (minPrice || maxPrice) {
        const priceStr = p.price.replace(/[^\d]/g, '');
        const priceNum = parseInt(priceStr) || 0;
        const minPriceNum = parseInt(minPrice.replace(/[^\d]/g, '')) || 0;
        const maxPriceNum = parseInt(maxPrice.replace(/[^\d]/g, '')) || Infinity;
        matchesPrice = priceNum >= minPriceNum && priceNum <= maxPriceNum;
      }
      
      // Size filter
      let matchesSize = true;
      if (minSize) {
        const minSizeNum = parseFloat(minSize) || 0;
        if (sizeUnit === 'Decimals' && p.size) {
          const sizeMatch = p.size.match(/(\d+\.?\d*)/);
          if (sizeMatch) {
            const sizeNum = parseFloat(sizeMatch[1]);
            matchesSize = sizeNum >= minSizeNum;
          }
        } else if (sizeUnit === 'SQM' && p.sqm) {
          matchesSize = p.sqm >= minSizeNum;
        } else if (sizeUnit === 'Acres') {
          // Convert acres to decimals (1 acre ≈ 2.47 decimals)
          const minSizeInDecimals = minSizeNum * 2.47;
          if (p.size) {
            const sizeMatch = p.size.match(/(\d+\.?\d*)/);
            if (sizeMatch) {
              const sizeNum = parseFloat(sizeMatch[1]);
              matchesSize = sizeNum >= minSizeInDecimals;
            }
          }
        }
      }
      
      // Keyword search
      const matchesKeyword = !keyword || 
                            p.title.toLowerCase().includes(keyword.toLowerCase()) ||
                            p.location.toLowerCase().includes(keyword.toLowerCase()) ||
                            (p.district && p.district.toLowerCase().includes(keyword.toLowerCase())) ||
                            (p.description && p.description.toLowerCase().includes(keyword.toLowerCase())) ||
                            (p.code && p.code.includes(keyword));
      
      return matchesType && matchesStatus && matchesCategory && matchesLocation && 
             matchesUsage && matchesPrice && matchesSize && matchesKeyword;
    });
  }, [activeType, activeStatus, activeCategory, activeLocation, activeUsage, minPrice, maxPrice, minSize, sizeUnit, keyword]);

  return (
    <div className="bg-corporate-slate min-h-screen">
      {/* Header */}
      <div className="bg-corporate-navy text-white pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-corporate-blue/5 -skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="text-corporate-blue text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-6">Portfolio</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6">Commercial Assets</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl font-light">
              Exclusive listings of Grade-A office spaces, specialized industrial facilities, and prime retail pavilions across the metropolitan Kampala region.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="sticky top-16 lg:top-[6.5rem] z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex-grow max-w-xl relative group">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-corporate-blue transition-colors" width={16} height={16} />
              <input 
                type="text" 
                placeholder="Quick keyword search..." 
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-50 border border-gray-100 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-corporate-blue transition-all"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 border text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${
                  isFilterOpen ? 'bg-corporate-navy text-white border-corporate-navy' : 'bg-white text-corporate-navy border-gray-200 hover:border-corporate-blue'
                }`}
              >
                <SlidersHorizontal size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Filter Assets</span>
                <span className="sm:hidden">Filter</span>
                <ChevronDown size={12} className={`sm:w-[14px] sm:h-[14px] transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="hidden sm:flex items-center border border-gray-200 h-[44px] sm:h-[52px] rounded-sm overflow-hidden">
                <button 
                  className="px-3 sm:px-4 text-corporate-navy hover:text-corporate-blue hover:bg-corporate-slate transition-all h-full"
                  title="Grid View"
                  aria-label="Grid View"
                >
                  <LayoutGrid size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
                <div className="w-px h-6 bg-gray-200"></div>
                <button 
                  className="px-3 sm:px-4 text-gray-300 hover:text-corporate-blue hover:bg-corporate-slate transition-all h-full"
                  title="List View (Coming Soon)"
                  aria-label="List View"
                  disabled
                >
                  <ListIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <PropertyFilters
                  activeType={activeType}
                  activeStatus={activeStatus}
                  activeCategory={activeCategory}
                  activeLocation={activeLocation}
                  activeUsage={activeUsage}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  minSize={minSize}
                  sizeUnit={sizeUnit}
                  keyword={keyword}
                  onTypeChange={setActiveType}
                  onStatusChange={setActiveStatus}
                  onCategoryChange={setActiveCategory}
                  onLocationChange={setActiveLocation}
                  onUsageChange={setActiveUsage}
                  onMinPriceChange={setMinPrice}
                  onMaxPriceChange={setMaxPrice}
                  onMinSizeChange={setMinSize}
                  onSizeUnitChange={setSizeUnit}
                  onKeywordChange={setKeyword}
                  onSearch={() => {}} // Filters apply automatically
                  onReset={() => { 
                    setActiveType('All'); 
                    setActiveStatus('All'); 
                    setActiveCategory('All');
                    setActiveLocation('All');
                    setActiveUsage('All');
                    setMinPrice('');
                    setMaxPrice('');
                    setMinSize('');
                    setSizeUnit('Decimals');
                    setKeyword('');
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex justify-between items-center mb-8 sm:mb-10">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Showing <span className="text-corporate-navy">{filteredProperties.length}</span> Results
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
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
            className="bg-white py-20 sm:py-32 md:py-40 flex flex-col items-center text-center border border-gray-100 rounded-sm px-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-corporate-slate rounded-full flex items-center justify-center text-gray-300 mb-6 sm:mb-8">
              <Building2 size={32} className="sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-corporate-navy mb-3 sm:mb-4">No assets match your search</h3>
            <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
              We frequently have off-market opportunities not listed publicly. Contact our advisory team directly for a confidential inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="inline-block bg-corporate-navy text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-corporate-blue transition-all shadow-lg hover:shadow-xl"
              >
                Contact Advisory Team
              </Link>
              <button 
                onClick={() => { 
                  setActiveType('All'); 
                  setActiveStatus('All'); 
                  setActiveCategory('All');
                  setActiveLocation('All');
                  setActiveUsage('All');
                  setMinPrice('');
                  setMaxPrice('');
                  setMinSize('');
                  setSizeUnit('Decimals');
                  setKeyword('');
                }}
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

