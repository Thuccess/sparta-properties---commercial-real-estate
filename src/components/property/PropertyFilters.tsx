'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { PropertyType, ListingStatus } from '../../types/property';

interface PropertyFiltersProps {
  activeType: string;
  activeStatus: string;
  activeCategory: string;
  activeLocation: string;
  activeUsage: string;
  minPrice: string;
  maxPrice: string;
  minSize: string;
  sizeUnit: string;
  keyword: string;
  onTypeChange: (type: string) => void;
  onStatusChange: (status: string) => void;
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
  onUsageChange: (usage: string) => void;
  onMinPriceChange: (price: string) => void;
  onMaxPriceChange: (price: string) => void;
  onMinSizeChange: (size: string) => void;
  onSizeUnitChange: (unit: string) => void;
  onKeywordChange: (keyword: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  activeType,
  activeStatus,
  activeCategory,
  activeLocation,
  activeUsage,
  minPrice,
  maxPrice,
  minSize,
  sizeUnit,
  keyword,
  onTypeChange,
  onStatusChange,
  onCategoryChange,
  onLocationChange,
  onUsageChange,
  onMinPriceChange,
  onMaxPriceChange,
  onMinSizeChange,
  onSizeUnitChange,
  onKeywordChange,
  onSearch,
  onReset
}) => {
  const propertyTypes = ['All', ...Object.values(PropertyType)];
  const statuses = ['All', ...Object.values(ListingStatus)];
  const categories = ['All', 'Bungalows', 'Residential Plots', 'Storyed Houses', 'Apartments', 'Rental Units', 'Commercial Plots', 'Apartment Blocks', 'Luxury Condominiums', 'Furnished Bungalows/Apartments', 'Furnished City Apartments', 'Residential Land', 'Commercial Land', 'Office Space', 'Retail Space', 'Industrial'];
  const locations = ['All', 'Kampala', 'Wakiso', 'Entebbe', 'Jinja', 'Mukono', 'Buwaate', 'Nakasero', 'Kololo', 'Bugolobi', 'Katwe'];
  const usageTypes = ['All', 'Residential', 'Commercial', 'Industrial', 'Mixed Use', 'Agricultural'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-serif font-bold text-corporate-navy">Find Your Home</h3>
        <button 
          onClick={onReset}
          className="text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-corporate-blue transition-colors"
        >
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* 1. Property Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            1. Property category
          </label>
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-10"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* 2. Property Usage */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            2. Property usage
          </label>
          <select
            value={activeUsage}
            onChange={(e) => onUsageChange(e.target.value)}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-10"
          >
            {usageTypes.map(usage => (
              <option key={usage} value={usage}>{usage}</option>
            ))}
          </select>
        </div>

        {/* 3. Property Type */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            3. Property type
          </label>
          <select
            value={activeType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-10"
          >
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* 4. Property Location */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            4. Property location
          </label>
          <select
            value={activeLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-10"
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Price Range - Min */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            Price range - UGX (Min price)
          </label>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            placeholder="0"
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors"
          />
        </div>

        {/* Price Range - Max */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            Max price
          </label>
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            placeholder="No limit"
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors"
          />
        </div>

        {/* Minimum Size */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            Minimum size
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={minSize}
              onChange={(e) => onMinSizeChange(e.target.value)}
              placeholder="0"
              className="flex-1 bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors"
            />
            <select
              value={sizeUnit}
              onChange={(e) => onSizeUnitChange(e.target.value)}
              className="w-32 bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-8"
            >
              <option value="Decimals">Decimals</option>
              <option value="SQM">SQM</option>
              <option value="Acres">Acres</option>
            </select>
          </div>
        </div>

        {/* Keyword Search */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
            Keyword search
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            placeholder="Search keywords..."
            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-corporate-blue transition-colors"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onSearch}
          className="bg-corporate-blue text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-blue-dark transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Search size={18} strokeWidth={2.5} />
          </div>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default PropertyFilters;
