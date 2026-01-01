
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center" aria-label="Home">
              <img 
                src="/images/logo.png" 
                alt="Sparta Properties Limited" 
                className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uganda's premier commercial real estate firm, delivering excellence in property leasing, management, and strategic consultancy since 2018.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-gold transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-gold transition-colors transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-corporate-gold transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-serif">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/properties" className="hover:text-corporate-gold transition-colors">Commercial Listings</Link></li>
              <li><Link href="/services" className="hover:text-corporate-gold transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-corporate-gold transition-colors">About the Company</Link></li>
              <li><Link href="/contact" className="hover:text-corporate-gold transition-colors">Request a Viewing</Link></li>
              <li><Link href="/contact" className="hover:text-corporate-gold transition-colors">List Your Property</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-serif">Our Expertise</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Office Leasing & Strategy</li>
              <li>Retail Asset Management</li>
              <li>Industrial & Logistics</li>
              <li>Investment Advisory</li>
              <li>Property Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-serif">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-corporate-gold shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-corporate-gold shrink-0" />
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-corporate-gold transition-colors">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-corporate-gold shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-corporate-gold transition-colors">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

