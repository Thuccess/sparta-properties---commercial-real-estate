
import { Property } from '../types/property';
import { MOCK_PROPERTIES } from '../lib/constants';

// Re-export properties data for convenience
export { MOCK_PROPERTIES };

// Helper function to get property by ID
export function getPropertyById(id: string): Property | undefined {
  return MOCK_PROPERTIES.find(p => p.id === id);
}

// Helper function to get all properties
export function getAllProperties(): Property[] {
  return MOCK_PROPERTIES;
}

