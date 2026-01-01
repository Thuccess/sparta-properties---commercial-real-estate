'use client';

import React from 'react';
import Link from 'next/link';
import { Search, TrendingUp, UserCheck } from 'lucide-react';
import { MOCK_SERVICES } from '../../lib/constants';

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-corporate-navy text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-corporate-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Solutions for Every Stage of the Asset Lifecycle</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              From initial site selection to long-term facility management, we provide the strategic oversight required for high-performing real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {MOCK_SERVICES.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                   <div className="aspect-[4/3] bg-corporate-slate relative overflow-hidden">
                      <img src={`/images/services/service-${service.id}.jpg`} alt={service.title} className="w-full h-full object-cover grayscale opacity-80" />
                      <div className="absolute inset-0 bg-corporate-navy/10"></div>
                   </div>
                </div>
                <div className="lg:w-1/2">
                   <div className="w-16 h-1 w-16 bg-corporate-gold mb-8"></div>
                   <h2 className="text-4xl font-serif font-bold text-corporate-navy mb-6">{service.title}</h2>
                   <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">{service.description}</p>
                   <p className="text-gray-500 leading-relaxed mb-10">
                     {service.fullContent}
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-corporate-gold mt-1" />
                        <span className="text-sm font-bold text-corporate-navy">Market Analysis</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-corporate-gold mt-1" />
                        <span className="text-sm font-bold text-corporate-navy">Contract Negotiation</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-corporate-gold mt-1" />
                        <span className="text-sm font-bold text-corporate-navy">Risk Assessment</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="text-corporate-gold mt-1" />
                        <span className="text-sm font-bold text-corporate-navy">Reporting</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Section */}
      <section className="py-24 bg-corporate-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Strategic Advisory</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Navigating the East African market requires deep local insight. Our advisory wing supports institutional investors and developers in complex decision-making.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-corporate-gold"><Search size={20} /></div>
                  <div>
                    <div className="font-bold">Due Diligence</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Thorough vetting for acquisitions</div>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-corporate-gold"><TrendingUp size={20} /></div>
                  <div>
                    <div className="font-bold">Portfolio Optimization</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Maximizing yields through strategy</div>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-corporate-gold"><UserCheck size={20} /></div>
                  <div>
                    <div className="font-bold">Occupier Strategy</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Space planning for corporates</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-corporate-gold p-1">
               <div className="bg-corporate-navy p-12 lg:p-16 text-center border border-white/10">
                  <h3 className="text-2xl font-serif font-bold mb-4">Request a Proposal</h3>
                  <p className="text-gray-400 mb-8">Let us know your requirements and we'll prepare a custom service proposal for your business.</p>
                  <Link href="/contact" className="inline-block bg-corporate-gold text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-corporate-navy transition-all">
                    Contact Advisory Wing
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

