'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe } from 'lucide-react';
import { MOCK_PROPERTIES, MOCK_SERVICES, TESTIMONIALS } from '../lib/constants';
import PropertyCard from '../components/property/PropertyCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  return (
    <div className="bg-corporate-slate overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-corporate-navy text-white pt-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="/images/hero/hero-commercial-building.jpg" 
            alt="Commercial High-rise" 
            className="w-full h-full object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-corporate-navy/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
              <span className="h-0.5 w-12 bg-corporate-gold"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-corporate-gold">Uganda's Premier Advisory</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-serif font-bold leading-none mb-10">
              Defining the <span className="italic font-normal">Future</span> of Space.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-12">
              Strategic real estate solutions for institutional investors and corporate occupants across East Africa.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link href="/properties" className="bg-white text-corporate-navy hover:bg-corporate-gold hover:text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105">
                Browse Portfolio
                <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/services" className="border-2 border-white/20 hover:border-white hover:bg-white/10 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all text-center backdrop-blur-sm">
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners/Trust Signal */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center opacity-40 grayscale group">
            <div className="flex justify-center hover:grayscale-0 transition-all cursor-default"><img src="/images/partners/standard-chartered.svg" className="h-8" alt="Standard Chartered" /></div>
            <div className="flex justify-center hover:grayscale-0 transition-all cursor-default"><img src="/images/partners/mtn.svg" className="h-10" alt="MTN" /></div>
            <div className="flex justify-center hover:grayscale-0 transition-all cursor-default"><img src="/images/partners/stanbic-bank.svg" className="h-10" alt="Stanbic Bank" /></div>
            <div className="flex justify-center hover:grayscale-0 transition-all cursor-default"><img src="/images/partners/uganda-breweries.svg" className="h-12" alt="Uganda Breweries" /></div>
            <div className="flex justify-center hover:grayscale-0 transition-all cursor-default"><img src="/images/partners/unops.svg" className="h-10" alt="UNOPS" /></div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-corporate-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Current Availability</div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-corporate-navy">Selected Assets</h2>
            </div>
            <Link href="/properties" className="group inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-widest border-b border-corporate-gold pb-2 hover:text-corporate-gold transition-colors">
              <span>Explore All Listings</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {MOCK_PROPERTIES.map(property => (
              <motion.div key={property.id} variants={itemVariants}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section with Cards */}
      <section className="py-32 bg-corporate-navy text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <div className="sticky top-40">
                <div className="text-corporate-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Core Competencies</div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">Comprehensive Real Estate Intelligence.</h2>
                <p className="text-lg text-white/50 font-light leading-relaxed mb-12">
                  We provide a lifecycle approach to commercial real estate, from acquisition and development consultancy to asset management and disposal.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-corporate-gold/20 flex items-center justify-center text-corporate-gold"><Award size={20} /></div>
                    <span className="text-sm font-bold uppercase tracking-widest">ISO 9001 Certified Management</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-corporate-gold/20 flex items-center justify-center text-corporate-gold"><Globe size={20} /></div>
                    <span className="text-sm font-bold uppercase tracking-widest">Global Standards, Local Insight</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 gap-8">
              {MOCK_SERVICES.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors group relative"
                >
                  <div className="text-corporate-gold text-5xl font-serif absolute top-6 right-10 opacity-10 font-bold italic">0{idx + 1}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-lg mb-8">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-corporate-gold hover:text-white transition-colors">
                    Detailed Scope <ArrowRight size={12} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-corporate-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Client Feedback</div>
            <h2 className="text-5xl font-serif font-bold text-corporate-navy">The Voice of Authority</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-corporate-slate p-12 border-l-4 border-corporate-gold">
                <p className="text-xl italic font-serif text-corporate-navy leading-relaxed mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-corporate-navy flex items-center justify-center text-white font-serif text-xl font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-corporate-navy">{t.author}</div>
                    <div className="text-[10px] uppercase tracking-widest text-corporate-gold font-bold">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-corporate-navy leading-tight">Ready to elevate your <span className="text-corporate-gold">property portfolio</span>?</h2>
            <p className="text-2xl text-gray-500 font-light max-w-3xl mx-auto">
              Partner with the consultants who understand Kampala's commercial landscape better than anyone else.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-corporate-navy text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.4em] hover:bg-corporate-gold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Book a Consultation
              </Link>
              <Link href="/contact" className="border-2 border-corporate-navy text-corporate-navy px-12 py-6 text-xs font-bold uppercase tracking-[0.4em] hover:bg-corporate-navy hover:text-white transition-all hover:shadow-lg">
                List Your Property
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

