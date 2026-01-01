'use client';

import React from 'react';
import { PropertyType, ListingStatus } from '../../types/property';

interface PropertyFiltersProps {
  activeType: string;
  activeStatus: string;
  onTypeChange: (type: string) => void;
  onStatusChange: (status: string) => void;
  onReset: () => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  activeType,
  activeStatus,
  onTypeChange,
  onStatusChange,
  onReset
}) => {
  const propertyTypes = ['All', ...Object.values(PropertyType)];
  const statuses = ['All', ...Object.values(ListingStatus)];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-corporate-gold mb-6">Asset Class</h4>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map(type => (
            <button
              key={type}
              onClick={() => onTypeChange(type)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                activeType === type ? 'bg-corporate-navy text-white border-corporate-navy' : 'bg-white text-gray-500 border-gray-100 hover:border-corporate-gold'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-corporate-gold mb-6">Availability Status</h4>
        <div className="flex flex-wrap gap-2">
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                activeStatus === status ? 'bg-corporate-navy text-white border-corporate-navy' : 'bg-white text-gray-500 border-gray-100 hover:border-corporate-gold'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-corporate-gold mb-6">Market Location</h4>
        <select className="w-full bg-white border border-gray-100 px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-500 focus:outline-none focus:border-corporate-gold appearance-none">
          <option>All Districts</option>
          <option>Central Kampala</option>
          <option>Nakasero</option>
          <option>Kololo</option>
          <option>Bugolobi</option>
          <option>Industrial Area</option>
        </select>
      </div>
      <div className="flex items-end">
        <button 
          onClick={onReset}
          className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:text-red-800 transition-colors flex items-center gap-2 underline"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyFilters;

