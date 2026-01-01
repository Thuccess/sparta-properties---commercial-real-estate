
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../../lib/constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar - Enhanced */}
      <div className="hidden lg:block bg-gradient-to-r from-corporate-navy via-corporate-navy to-corporate-navy/95 py-3 text-white/80 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <a 
              href={`tel:${COMPANY_PHONE}`} 
              className="flex items-center gap-2.5 text-[10px] font-bold tracking-widest uppercase hover:text-corporate-gold transition-all group"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-corporate-gold rounded-full"></div>
              </div>
              <Phone size={12} className="text-corporate-gold" />
              <span className="group-hover:underline">{COMPANY_PHONE}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_EMAIL}`}
              className="flex items-center gap-2.5 text-[10px] font-bold tracking-widest uppercase hover:text-corporate-gold transition-all group"
            >
              <Mail size={12} className="text-corporate-gold" />
              <span className="group-hover:underline">{COMPANY_EMAIL}</span>
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/contact" 
              className="text-[10px] font-bold tracking-widest uppercase hover:text-corporate-gold transition-all relative group py-1"
            >
              <span className="relative z-10">List Your Property</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <span className="text-white/15 text-lg">|</span>
            <Link 
              href="/contact" 
              className="text-[10px] font-bold tracking-widest uppercase hover:text-corporate-gold transition-all relative group py-1"
            >
              <span className="relative z-10">Client Portal</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation - Enhanced */}
      <div
        className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-500 ease-out w-full bg-white lg:max-w-7xl lg:mx-auto lg:rounded-xl border-b border-gray-200/50 py-6 shadow-sm ${
          isScrolled 
            ? 'lg:top-2 py-3.5' 
            : ''
        }`}
      >
        <nav>
          <div className="px-6 lg:px-10">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group" aria-label="Home">
              <div className="relative">
                <div className="absolute inset-0 bg-corporate-gold/10 rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <img 
                  src="/images/logo.png" 
                  alt="Sparta Properties Limited" 
                  className={`w-auto transition-all duration-500 relative z-10 ${
                    isScrolled ? 'h-11' : 'h-16'
                  } group-hover:opacity-90 drop-shadow-sm`}
                  loading="eager"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link 
                    href={link.path} 
                    className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-2.5 px-2 group ${
                      pathname === link.path 
                        ? 'text-corporate-gold' 
                        : 'text-corporate-navy hover:text-corporate-gold'
                    }`}
                  >
                    <span className="relative z-10 block">{link.name}</span>
                    {pathname === link.path && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-corporate-gold shadow-lg shadow-corporate-gold/50" />
                    )}
                    {pathname !== link.path && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-gold group-hover:w-full transition-all duration-300" />
                    )}
                  </Link>
                </div>
              ))}
              <div>
                <Link 
                  href="/contact" 
                  className="bg-corporate-navy text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-corporate-gold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-corporate-gold/30 transform hover:scale-105 rounded-md relative overflow-hidden group"
                >
                  <span className="relative z-10">Inquire Now</span>
                </Link>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-corporate-navy p-2.5 hover:bg-corporate-slate rounded-md transition-all relative"
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
        </nav>

        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
            />
            <div className="md:hidden bg-white border-t-2 border-corporate-gold/20 shadow-2xl overflow-hidden relative z-50">
              <div className="px-6 py-6 flex flex-col space-y-1 bg-gradient-to-b from-white to-corporate-slate/30">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 px-5 text-lg font-serif font-bold transition-all rounded-md relative overflow-hidden group ${
                        pathname === link.path
                          ? 'text-corporate-gold bg-gradient-to-r from-corporate-slate to-corporate-slate/50 border-l-4 border-corporate-gold shadow-sm'
                          : 'text-corporate-navy hover:text-corporate-gold hover:bg-corporate-slate/50'
                      }`}
                    >
                      <span className="relative z-10 flex items-center">
                        {link.name}
                        {pathname === link.path && (
                          <span className="ml-2 w-2 h-2 bg-corporate-gold rounded-full" />
                        )}
                      </span>
                    </Link>
                  </div>
                ))}
                <div className="pt-6 mt-4 border-t-2 border-gray-200 space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 bg-corporate-navy text-white py-4 font-bold uppercase tracking-widest text-xs rounded-md hover:bg-corporate-gold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Inquire Now</span>
                  </Link>
                  <a 
                    href={`tel:${COMPANY_PHONE}`} 
                    className="flex items-center justify-center space-x-2 bg-white text-corporate-navy py-4 font-bold uppercase tracking-widest text-xs rounded-md hover:bg-corporate-gold hover:text-white transition-all border-2 border-corporate-navy hover:border-corporate-gold shadow-md"
                  >
                    <Phone size={14} />
                    <span>Call {COMPANY_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;

