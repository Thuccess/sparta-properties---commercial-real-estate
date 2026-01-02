'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_NAME, COMPANY_WHATSAPP, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_PO_BOX, COMPANY_PHONE_2, getWhatsAppUrl } from '../../lib/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-corporate-navy text-white pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-corporate-blue/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block" aria-label="Home">
              <Image 
                src="/images/logo.png" 
                alt="Sparta Properties Limited" 
                width={200}
                height={64}
                className="h-14 sm:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </Link>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-sm">
              Uganda's premier commercial real estate firm, delivering excellence in property leasing, management, and strategic consultancy since 2018.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-white/70 hover:text-corporate-blue hover:border-corporate-blue/50 hover:bg-white/10 transition-all hover:scale-110 shadow-lg hover:shadow-corporate-blue/20"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60 font-sans">
              {[
                { name: 'Commercial Listings', path: '/properties' },
                { name: 'Our Services', path: '/services' },
                { name: 'About the Company', path: '/about' },
                { name: 'Request a Viewing', path: '/contact' },
                { name: 'List Your Property', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:text-corporate-blue transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/60 font-sans">
              {[
                { name: 'Property Management', path: '/services/property-management' },
                { name: 'Tenant Placement', path: '/services/tenant-placement' },
                { name: 'Property Sale & Purchase', path: '/services/property-sale-purchase' },
                { name: 'Land Title Processing', path: '/services/land-title-processing' },
                { name: 'Property Listing & Marketing', path: '/services/property-listing-marketing' },
                { name: 'Property Remodeling', path: '/services/property-remodeling' },
                { name: 'Feasibility Study', path: '/services/feasibility-study' },
                { name: 'Sparta Credit', path: '/services/sparta-credit' },
                { name: 'Office Leasing & Strategy', path: '/services/office-leasing-strategy' },
                { name: 'Investment Advisory', path: '/services/investment-advisory' }
              ].map((service) => (
                <li key={service.path}>
                  <Link
                    href={service.path}
                    className="hover:text-corporate-blue transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-5 text-sm text-white/60 font-sans">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-corporate-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors leading-relaxed">
                  {COMPANY_ADDRESS}
                  <br />
                  <span className="text-white/50 text-xs">{COMPANY_PO_BOX}</span>
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <MessageCircle size={18} className="text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href={getWhatsAppUrl('Hello! I would like to get in touch.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors break-all font-semibold"
                >
                  {COMPANY_WHATSAPP}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-corporate-blue shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${COMPANY_WHATSAPP}`}
                    className="hover:text-corporate-blue transition-colors break-all"
                  >
                    {COMPANY_WHATSAPP}
                  </a>
                  <a
                    href={`tel:${COMPANY_PHONE_2}`}
                    className="hover:text-corporate-blue transition-colors break-all text-sm"
                  >
                    {COMPANY_PHONE_2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-corporate-blue shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-corporate-blue transition-colors break-all"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-sans">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-xs text-white/40 hover:text-corporate-blue transition-colors font-sans"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link
              href="/contact"
              className="text-xs text-white/40 hover:text-corporate-blue transition-colors font-sans"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-corporate-blue/10 border border-corporate-blue/30 text-corporate-blue flex items-center justify-center hover:bg-corporate-blue/20 hover:scale-110 transition-all shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUpRight size={20} className="rotate-[-45deg]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
