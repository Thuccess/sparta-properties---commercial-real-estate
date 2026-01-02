'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Store, CheckCircle2, ArrowRight, BarChart3, Shield, DollarSign } from 'lucide-react';

const CheckCircle = ({ className }: { className?: string }) => (
  <CheckCircle2 className={className} size={20} strokeWidth={2.5} />
);

export default function RetailAssetManagement() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative bg-corporate-navy text-white pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-36 overflow-hidden">
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
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Retail Asset
              <span className="block italic font-normal text-corporate-blue mt-2">
                Management
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-3xl font-sans">
              Maximizing retail property performance through strategic management and tenant optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-corporate-navy mb-6">
                  Strategic Retail Portfolio Management
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 font-sans">
                  Our retail asset management team specializes in optimizing commercial retail properties, from high-street locations to shopping centers, ensuring maximum occupancy, tenant satisfaction, and portfolio value.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-8 font-sans">
                  Retail real estate requires specialized expertise in tenant mix optimization, footfall analysis, and consumer behavior. We combine data-driven insights with hands-on management to create thriving retail environments that benefit both property owners and tenants.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Tenant Mix Optimization',
                  'Lease Administration & Collections',
                  'Property Maintenance & Upkeep',
                  'Marketing & Tenant Acquisition',
                  'Financial Reporting & Analysis',
                  'Renovation & Repositioning'
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-corporate-cream p-8 sm:p-10 border border-corporate-blue/20 sticky top-32">
                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-6">
                  Our Expertise
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Store, title: 'Retail Strategy', desc: 'Optimize tenant mix and positioning' },
                    { icon: BarChart3, title: 'Performance Analytics', desc: 'Data-driven portfolio insights' },
                    { icon: Shield, title: 'Risk Management', desc: 'Protect and enhance asset value' },
                    { icon: DollarSign, title: 'Revenue Optimization', desc: 'Maximize rental income streams' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-corporate-blue/10 border-2 border-corporate-blue/20 flex items-center justify-center text-corporate-blue shrink-0 group-hover:bg-corporate-blue/20 group-hover:scale-110 transition-all shadow-md">
                        <item.icon size={26} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-semibold text-corporate-navy mb-1 font-sans">{item.title}</div>
                        <div className="text-sm text-gray-600 font-sans">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-corporate-navy text-white px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-blue transition-all group"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-corporate-navy text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Optimize Your Retail Portfolio Today
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-sans">
            Partner with us to maximize the performance and value of your retail assets.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-corporate-blue text-corporate-navy px-10 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-blue-light transition-all hover-lift shadow-premium group"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

