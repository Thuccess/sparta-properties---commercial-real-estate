'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Award, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-corporate-navy text-white pt-48 pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-corporate-gold/5 -skew-x-12"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-8"
            >
              <div className="text-corporate-gold text-[11px] font-bold uppercase tracking-[0.5em]">The Sparta Standard</div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none">Unrivaled <span className="italic font-normal">Authority</span> in Ugandan Real Estate.</h1>
              <p className="text-2xl text-white/50 max-w-2xl font-light leading-relaxed">
                Since 2018, Sparta Properties has been the strategic bridge between world-class commercial standards and the unique nuances of the Ugandan market.
              </p>
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-block bg-corporate-gold text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-corporate-navy transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img 
                src="/images/about-corporate.jpg" 
                alt="Corporate Strategy" 
                className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-corporate-gold/10 -z-10 animate-pulse"></div>
            </div>
            <div className="space-y-16">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <Target size={32} className="text-corporate-gold" />
                  <h2 className="text-4xl font-serif font-bold text-corporate-navy">The Mission</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  To institutionalize real estate excellence in East Africa, delivering measurable asset performance and professional occupancy strategies that empower corporate growth.
                </p>
              </div>
              <div className="h-px w-full bg-gray-100"></div>
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <Globe size={32} className="text-corporate-gold" />
                  <h2 className="text-4xl font-serif font-bold text-corporate-navy">The Vision</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  To be recognized as the regional benchmark for commercial integrity, serving as the trusted conduit for international capital seeking exposure to Ugandan property assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-40 bg-corporate-slate border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold text-corporate-navy">The Pillars of our Practice</h2>
            <div className="h-1 w-24 bg-corporate-gold mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden shadow-xl">
            {[
              { icon: <ShieldCheck />, title: 'Unyielding Integrity', desc: 'Absolute transparency in every transaction, from lease negotiation to financial reporting.' },
              { icon: <Award />, title: 'Elite Technicality', desc: 'Combining deep market data with international property management frameworks (ISO/RICS inspired).' },
              { icon: <Users />, title: 'Strategic Partnership', desc: 'We act as an extension of your board, aligning real estate strategy with broader corporate objectives.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-16 group hover:bg-corporate-navy transition-all duration-500">
                <div className="text-corporate-gold mb-8 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-corporate-navy group-hover:text-white">{v.title}</h3>
                <p className="text-gray-500 group-hover:text-white/60 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter (Simple) */}
      <section className="py-32 bg-corporate-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '$50M+', label: 'Portfolio Value' },
              { value: '12k+', label: 'SQM Managed' },
              { value: '98%', label: 'Retention Rate' },
              { value: '07+', label: 'Awards won' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="text-5xl font-serif font-bold text-corporate-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

