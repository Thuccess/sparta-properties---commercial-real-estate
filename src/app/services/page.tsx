'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, TrendingUp, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MOCK_SERVICES } from '../../lib/constants';

// Helper function to get service image with fallback
const getServiceImage = (serviceId: string): string => {
  const imageMap: Record<string, string> = {
    'property-management': '/images/services/service-management.jpg',
    'tenant-placement': '/images/services/service-leasing.jpg',
    'property-sale-purchase': '/images/services/service-advisory.jpg',
    'land-title-processing': '/images/services/service-advisory.jpg',
    'property-listing-marketing': '/images/services/service-leasing.jpg',
    'management-system': '/images/services/service-management.jpg',
    'real-estate-agency': '/images/services/service-management.jpg',
    'property-remodeling': '/images/services/service-advisory.jpg',
    'feasibility-study': '/images/services/service-advisory.jpg',
    'sparta-credit': '/images/services/service-leasing.jpg',
    'office-leasing-strategy': '/images/services/service-leasing.jpg',
    'investment-advisory': '/images/services/service-advisory.jpg',
    'industrial-logistics': '/images/services/service-management.jpg',
    'retail-asset-management': '/images/services/service-leasing.jpg',
    'property-maintenance': '/images/services/service-management.jpg',
  };
  
  return imageMap[serviceId] || '/images/services/service-management.jpg';
};

const CheckCircle = ({ className }: { className?: string }) => (
  <CheckCircle2 className={className} size={20} strokeWidth={2.5} />
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header - Editorial */}
      <section className="relative bg-corporate-navy text-white pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-36 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blue rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-corporate-blue"></div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                Our Expertise
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
              Solutions for Every
              <span className="block italic font-normal text-corporate-blue mt-2">
                Stage of the Asset
              </span>
              <span className="block">Lifecycle</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-3xl font-sans">
              From initial site selection to long-term facility management, we provide the strategic oversight required for high-performing real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services - Editorial Layout */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-32 sm:space-y-40"
          >
            {MOCK_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2 w-full relative group">
                  <div className="aspect-[4/3] bg-corporate-slate relative overflow-hidden shadow-premium">
                    <Image
                      src={getServiceImage(service.id)}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={(e) => {
                        // Fallback to default service image if image fails to load
                        const target = e.target as HTMLImageElement;
                        if (target.src !== '/images/services/service-management.jpg') {
                          target.src = '/images/services/service-management.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/20 to-transparent"></div>
                  </div>
                  {/* Decorative Element */}
                  <div className={`absolute ${idx % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-32 h-32 bg-corporate-blue/10 -z-10 hidden lg:block`}></div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 w-full">
                  <div className="w-16 h-1 bg-corporate-blue mb-8"></div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-corporate-navy mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed font-light font-sans">
                    {service.description}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 font-sans">
                    {service.fullContent}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      'Market Analysis',
                      'Contract Negotiation',
                      'Risk Assessment',
                      'Reporting'
                    ].map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIdx * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1">
                          <CheckCircle className="text-corporate-blue group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-sm font-semibold text-corporate-navy font-sans">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisory Section - Premium */}
      <section className="py-24 sm:py-32 lg:py-40 bg-corporate-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-corporate-blue"></div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                  Strategic Advisory
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Navigating the East African Market
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed font-light font-sans">
                Navigating the East African market requires deep local insight. Our advisory wing supports institutional investors and developers in complex decision-making.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Search, title: 'Due Diligence', desc: 'Thorough vetting for acquisitions' },
                  { icon: TrendingUp, title: 'Portfolio Optimization', desc: 'Maximizing yields through strategy' },
                  { icon: UserCheck, title: 'Occupier Strategy', desc: 'Space planning for corporates' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-corporate-blue group-hover:bg-white/10 group-hover:scale-110 transition-all shrink-0 shadow-lg">
                      <item.icon size={26} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1 font-sans">{item.title}</div>
                      <div className="text-[11px] text-white/50 uppercase tracking-wider font-sans">
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-corporate-blue p-1 rounded-lg shadow-premium-lg">
                <div className="bg-corporate-navy/95 backdrop-blur-sm p-10 sm:p-12 lg:p-16 text-center rounded-lg border border-white/10">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                    Request a Proposal
                  </h3>
                  <p className="text-white/70 mb-8 text-base leading-relaxed font-sans">
                    Let us know your requirements and we'll prepare a custom service proposal for your business.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-corporate-blue text-corporate-navy px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-blue-light transition-all hover-lift shadow-lg group"
                  >
                    <span>Contact Advisory Wing</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
