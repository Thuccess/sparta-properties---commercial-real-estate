'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, CheckCircle2, ArrowRight, TrendingUp, Clock, ShieldCheck, FileCheck } from 'lucide-react';

const CheckCircle = ({ className }: { className?: string }) => (
  <CheckCircle2 className={className} size={20} strokeWidth={2.5} />
);

export default function SpartaCredit() {
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
              Sparta
              <span className="block italic font-normal text-corporate-blue mt-2">
                Credit
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-3xl font-sans">
              Reliable and simple financing solutions for your real estate needs.
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
                  Accessible Real Estate Financing
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
                  Sparta Credit provides accessible financing solutions for real estate transactions. Whether you need funding for property purchase, development, or renovation, we offer flexible terms and competitive rates.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-sans">
                  Our streamlined application process and quick approval make it easy to access the capital you need for your real estate investments. We understand the unique financing needs of real estate projects and offer tailored solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-6">Our Financing Solutions:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: DollarSign, title: 'Property Purchase', desc: 'Financing for property acquisitions' },
                    { icon: TrendingUp, title: 'Development Finance', desc: 'Funding for property development projects' },
                    { icon: FileCheck, title: 'Renovation Loans', desc: 'Financing for property improvements' },
                    { icon: Clock, title: 'Quick Approval', desc: 'Streamlined process with fast approvals' },
                    { icon: ShieldCheck, title: 'Flexible Terms', desc: 'Customized terms to suit your needs' },
                    { icon: CreditCard, title: 'Competitive Rates', desc: 'Attractive interest rates and terms' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-corporate-slate border-l-4 border-corporate-blue">
                      <div className="w-14 h-14 rounded-xl bg-corporate-blue/10 border-2 border-corporate-blue/20 flex items-center justify-center text-corporate-blue shrink-0 group-hover:bg-corporate-blue/20 group-hover:scale-110 transition-all shadow-md">
                        <item.icon size={26} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-semibold text-corporate-navy mb-2 font-sans">{item.title}</div>
                        <div className="text-sm text-gray-600 font-sans">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-corporate-cream p-8 sm:p-10 border border-corporate-blue/20">
                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-4">Why Choose Sparta Credit?</h3>
                <ul className="space-y-4">
                  {[
                    'Reliable and simple financing process',
                    'Quick approval and fast disbursement',
                    'Flexible terms tailored to your needs',
                    'Competitive interest rates',
                    'Experienced team understanding real estate financing',
                    'Transparent process with clear terms'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-corporate-blue mt-1 shrink-0" />
                      <span className="text-gray-700 font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-corporate-cream p-8 sm:p-10 border border-corporate-blue/20 sticky top-32">
                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-6">
                  Get Started
                </h3>
                <p className="text-gray-700 mb-6 font-sans">
                  Need financing for your real estate project? Contact us today.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-corporate-navy text-white px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-blue transition-all group mb-4"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="pt-6 border-t border-corporate-blue/20">
                  <div className="text-sm text-gray-600 mb-2 font-sans">Phone:</div>
                  <a href="tel:+256701348819" className="text-corporate-blue hover:underline font-semibold font-sans">
                    +256 701 348819
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

