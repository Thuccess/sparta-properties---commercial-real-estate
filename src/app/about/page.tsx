'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Award, Users, Globe, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero - Editorial */}
      <section className="relative bg-corporate-navy text-white pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-36 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-corporate-blue rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-corporate-blue"></div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                The Sparta Standard
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-bold leading-tight mb-6 sm:mb-8">
              Unrivaled{' '}
              <span className="italic font-normal text-corporate-blue block mt-2">
                Authority
              </span>
              <span className="block">in Ugandan Real Estate.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl font-light leading-relaxed mb-8 sm:mb-10 font-sans">
              Welcome to Sparta Properties. We are a leading real estate company dedicated to providing exceptional service and outstanding results for our clients. With years of experience and a team of knowledgeable and professional agents, we offer a complete range of real estate services to meet all of your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-corporate-blue text-corporate-navy px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-blue-light transition-all hover-lift shadow-premium group"
            >
              <span>Partner With Us</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Editorial Layout */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center"
          >
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative overflow-hidden shadow-premium-lg">
                <Image
                  src="/images/about-corporate.jpg"
                  alt="Corporate Strategy"
                  width={800}
                  height={600}
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/20 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-corporate-blue/10 -z-10 hidden lg:block"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-16 order-1 lg:order-2"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-corporate-blue/10 border border-corporate-blue/20 flex items-center justify-center text-corporate-blue">
                    <Target size={24} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-corporate-navy">
                    The Mission
                  </h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light font-sans">
                  To institutionalize real estate excellence in East Africa, delivering measurable asset performance and professional occupancy strategies that empower corporate growth.
                </p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-corporate-blue/10 border-2 border-corporate-blue/20 flex items-center justify-center text-corporate-blue group-hover:bg-corporate-blue/20 group-hover:scale-110 transition-all">
                    <Globe size={28} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-corporate-navy">
                    The Vision
                  </h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light font-sans">
                  Whether you're buying, selling, renting, or investing, we are here to help. Our vision is to be Uganda's most trusted real estate partner, known for our professionalism, integrity, and commitment to client success. We strive to deliver exceptional results that exceed expectations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid - Premium */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-corporate-cream border-y border-corporate-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-corporate-blue"></div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                Our Foundation
              </span>
              <div className="h-px w-16 bg-corporate-blue"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-corporate-navy">
              The Pillars of our
              <span className="block italic font-normal text-corporate-blue">Practice</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden shadow-premium-lg">
            {[
              { icon: ShieldCheck, title: 'Unyielding Integrity', desc: 'Absolute transparency in every transaction, from lease negotiation to financial reporting.' },
              { icon: Award, title: 'Elite Technicality', desc: 'Combining deep market data with international property management frameworks (ISO/RICS inspired).' },
              { icon: Users, title: 'Strategic Partnership', desc: 'We act as an extension of your board, aligning real estate strategy with broader corporate objectives.' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-10 sm:p-12 md:p-16 group hover:bg-corporate-navy transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-corporate-blue/10 border-2 border-corporate-blue/20 flex items-center justify-center text-corporate-blue mb-8 group-hover:scale-110 group-hover:bg-corporate-blue/20 transition-all">
                  <value.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 sm:mb-6 text-corporate-navy group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/70 leading-relaxed font-light font-sans transition-colors">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter - Premium */}
      <section className="py-24 sm:py-32 lg:py-40 bg-corporate-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 text-center">
            {[
              { value: '$50M+', label: 'Portfolio Value' },
              { value: '12k+', label: 'SQM Managed' },
              { value: '98%', label: 'Retention Rate' },
              { value: '07+', label: 'Awards won' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-corporate-blue mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60 font-sans">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
