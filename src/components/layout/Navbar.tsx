'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_WHATSAPP, COMPANY_EMAIL, getWhatsAppUrl } from '../../lib/constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      {/* Top Bar - Premium */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block bg-corporate-navy/95 backdrop-blur-md py-2 lg:py-3 text-white/80 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a 
              href={getWhatsAppUrl('Hello! I would like to get in touch.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[10px] font-semibold tracking-wider uppercase hover:text-[#25D366] transition-colors group"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
              </div>
              <MessageCircle size={14} className="text-[#25D366]" strokeWidth={2.5} />
              <span className="group-hover:underline hidden xl:inline">WhatsApp</span>
              <span className="group-hover:underline xl:hidden">Chat</span>
            </a>
            <a 
              href={`tel:${COMPANY_WHATSAPP}`} 
              className="flex items-center gap-2.5 text-[10px] font-semibold tracking-wider uppercase hover:text-corporate-blue transition-colors group"
            >
              <Phone size={14} className="text-corporate-blue" strokeWidth={2.5} />
              <span className="group-hover:underline hidden xl:inline">{COMPANY_WHATSAPP}</span>
              <span className="group-hover:underline xl:hidden">Call</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="/contact" 
              className="text-[10px] font-semibold tracking-wider uppercase hover:text-corporate-blue transition-colors relative group py-1"
            >
              <span className="relative z-10 hidden 2xl:inline">List Your Property</span>
              <span className="relative z-10 2xl:hidden">List Property</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
            <span className="text-white/10 text-lg">|</span>
            <Link 
              href="/contact" 
              className="text-[10px] font-semibold tracking-wider uppercase hover:text-corporate-blue transition-colors relative group py-1"
            >
              <span className="relative z-10">Portal</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Main Navigation - Premium Glassmorphism */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-500 ease-out w-full ${
          isScrolled 
            ? 'lg:top-4 py-3 shadow-premium-lg' 
            : 'py-4 lg:py-5'
        }`}
      >
        <nav className={`max-w-7xl mx-auto px-6 lg:px-12 ${
          isScrolled 
            ? 'glass-dark rounded-2xl border border-white/10' 
            : 'bg-white lg:rounded-2xl lg:shadow-premium lg:border lg:border-gray-100'
        }`}>
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group" aria-label="Home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-corporate-blue/10 rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <Image 
                  src="/images/logo.png" 
                  alt="Sparta Properties Limited" 
                  width={200}
                  height={64}
                  className={`w-auto transition-all duration-500 relative z-10 ${
                    isScrolled ? 'h-8 sm:h-10 md:h-12' : 'h-10 sm:h-12 md:h-14 lg:h-16'
                  } group-hover:opacity-90`}
                  priority
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  href={link.path} 
                  className={`text-[11px] font-semibold uppercase tracking-wider transition-all relative py-3 px-2 group ${
                    pathname === link.path 
                      ? 'text-corporate-blue' 
                      : isScrolled 
                        ? 'text-white/90 hover:text-corporate-blue' 
                        : 'text-corporate-navy hover:text-corporate-blue'
                  }`}
                >
                  <span className="relative z-10 block">{link.name}</span>
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-corporate-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {pathname !== link.path && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-corporate-blue group-hover:w-full transition-all duration-300"></span>
                  )}
                </Link>
              ))}
              <div className="ml-4">
                <Link 
                  href="/contact" 
                  className={`px-6 py-3 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-md relative overflow-hidden group ${
                    isScrolled
                      ? 'bg-corporate-blue text-corporate-navy hover:bg-corporate-blue-light'
                      : 'bg-corporate-navy text-white hover:bg-corporate-blue'
                  }`}
                >
                  <span className="relative z-10 hidden lg:inline">Inquire Now</span>
                  <span className="relative z-10 lg:hidden">Inquire</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`md:hidden p-2.5 rounded-md transition-all relative ${
                isScrolled ? 'text-white' : 'text-corporate-navy'
              } hover:bg-white/10`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-white shadow-premium-lg z-50 overflow-y-auto"
              >
                  <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Image 
                      src="/images/logo.png" 
                      alt="Sparta Properties" 
                      width={150}
                      height={48}
                      className="h-12 w-auto"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-corporate-navy p-2 hover:bg-corporate-slate rounded-md"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 px-6 text-lg font-serif font-semibold transition-all rounded-lg relative overflow-hidden group ${
                          pathname === link.path
                            ? 'text-corporate-blue bg-corporate-cream'
                            : 'text-corporate-navy hover:text-corporate-blue hover:bg-corporate-slate'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-between">
                          {link.name}
                          {pathname === link.path && (
                            <div className="w-2 h-2 bg-corporate-blue rounded-full"></div>
                          )}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-corporate-blue/5"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    ))}
                  </div>
                  
                  <div className="pt-8 mt-8 border-t-2 border-gray-100 space-y-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 bg-corporate-navy text-white py-4 font-semibold uppercase tracking-wider text-sm rounded-lg hover:bg-corporate-blue transition-all shadow-lg hover:shadow-xl"
                    >
                      <span>Inquire Now</span>
                    </Link>
                    <a 
                      href={getWhatsAppUrl('Hello! I would like to get in touch.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-semibold uppercase tracking-wider text-sm rounded-lg hover:bg-[#20BA5A] transition-all shadow-lg"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp Us</span>
                    </a>
                    <a 
                      href={`tel:${COMPANY_WHATSAPP}`} 
                      className="flex items-center justify-center gap-2 bg-white text-corporate-navy py-4 font-semibold uppercase tracking-wider text-sm rounded-lg hover:bg-corporate-blue hover:text-white transition-all border-2 border-corporate-navy hover:border-corporate-blue"
                    >
                      <Phone size={16} />
                      <span>Call {COMPANY_WHATSAPP}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
