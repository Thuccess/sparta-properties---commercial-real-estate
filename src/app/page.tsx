'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Globe, TrendingUp, Building2, MapPin, MessageCircle } from 'lucide-react';
import { MOCK_PROPERTIES, MOCK_SERVICES, TESTIMONIALS, getWhatsAppUrl } from '../lib/constants';
import PropertyCard from '../components/property/PropertyCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
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

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] flex items-center justify-center bg-corporate-navy text-white overflow-hidden">
        {/* Animated Background Layers */}
        <motion.div 
          style={{ 
            scale: heroScale, 
            opacity: heroOpacity,
            y: heroY
          }}
          className="absolute inset-0 z-0"
        >
          {/* Gradient Overlay - Animated */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-b from-corporate-navy/60 via-corporate-navy/40 to-corporate-navy z-10"
          />
          
          {/* Main Background Image with Advanced Animations */}
          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            initial={{ 
              scale: 1.15, 
              opacity: 0,
              y: 30,
              x: -10
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{ 
              duration: 2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                x: [0, -10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <Image 
                src="/images/hero/hero-commercial-building.jpg" 
                alt="Commercial High-rise" 
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            
            {/* Animated Vignette Effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-corporate-navy/40"
            />
          </motion.div>

          {/* Animated Gradient Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0 gradient-overlay z-10"
          />

          {/* Animated Light Rays Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.3, 0.2],
              scale: [0.8, 1.1, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 z-10"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(29, 161, 242, 0.15) 0%, transparent 50%)',
            }}
          />

          {/* Subtle Breathing Animation Layer */}
          <motion.div
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 via-transparent to-corporate-navy/20 z-10"
          />
        </motion.div>

        {/* Animated Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-20 left-10 w-1 h-32 bg-corporate-blue hidden lg:block"
        >
          <motion.div
            animate={{
              height: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full bg-corporate-blue"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-20 right-10 w-32 h-1 bg-corporate-blue hidden lg:block"
        >
          <motion.div
            animate={{
              width: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="h-full bg-corporate-blue"
          />
        </motion.div>

        {/* Floating Particles Effect */}
        {[
          { left: '15%', top: '25%', delay: 0, duration: 10 },
          { left: '35%', top: '45%', delay: 1.5, duration: 12 },
          { left: '55%', top: '30%', delay: 3, duration: 9 },
          { left: '75%', top: '50%', delay: 2, duration: 11 },
          { left: '25%', top: '60%', delay: 4, duration: 13 },
          { left: '65%', top: '20%', delay: 1, duration: 8 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0.3, 0],
              scale: [0, 1.2, 1, 0],
              y: [0, -30, -60, -90],
              x: [0, Math.sin(i) * 20, Math.cos(i) * 30, Math.sin(i) * 40],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-corporate-blue/40 rounded-full blur-sm hidden lg:block"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl"
          >
            {/* Editorial Badge */}
            <motion.div 
              variants={itemVariants} 
              className="flex items-center gap-4 mb-8 sm:mb-12"
            >
              <div className="h-px w-16 bg-corporate-blue"></div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-corporate-blue/90 font-sans">
                Established 2018
              </span>
              <div className="h-px flex-1 max-w-32 bg-corporate-blue/30"></div>
            </motion.div>
            
            {/* Main Headline - Editorial Typography */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif font-bold leading-[0.9] mb-6 sm:mb-8 md:mb-12 tracking-tight"
            >
              Defining the{' '}
              <span className="italic font-normal text-corporate-blue block mt-2">
                Future
              </span>
              <span className="block">of Space.</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl font-light leading-relaxed mb-8 sm:mb-12 md:mb-16 font-sans px-2 sm:px-0"
            >
              Strategic real estate solutions for institutional investors and corporate occupants across East Africa.
            </motion.p>
            
            {/* CTA Buttons - Premium Style */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto"
            >
              <Link 
                href="/properties" 
                className="group relative bg-corporate-blue text-corporate-navy px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-corporate-blue-light hover-lift flex items-center justify-center gap-2 sm:gap-3 shadow-premium w-full sm:w-auto"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 border-2 border-corporate-blue/20 group-hover:border-corporate-blue/40 transition-colors"></div>
              </Link>
              <Link 
                href="/services" 
                className="group relative bg-transparent border-2 border-white/30 hover:border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/5 backdrop-blur-sm flex items-center justify-center w-full sm:w-auto"
              >
                <span>Our Services</span>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 sm:mt-20 pt-12 border-t border-white/10"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                {[
                  { value: '$50M+', label: 'Portfolio Value' },
                  { value: '12k+', label: 'SQM Managed' },
                  { value: '98%', label: 'Retention' }
                ].map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-corporate-blue mb-1 sm:mb-2 group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/60 font-sans">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-corporate-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Partners/Trust Signal - Refined */}
      <section className="py-12 sm:py-16 md:py-20 bg-corporate-cream border-y border-corporate-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-corporate-blue/70 mb-2 font-sans">
              Trusted By
            </p>
            <div className="h-px w-16 bg-corporate-blue/30 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { src: '/images/partners/standard-chartered.svg', alt: 'Standard Chartered' },
              { src: '/images/partners/mtn.svg', alt: 'MTN' },
              { src: '/images/partners/stanbic-bank.svg', alt: 'Stanbic Bank' },
              { src: '/images/partners/uganda-breweries.svg', alt: 'Uganda Breweries' },
              { src: '/images/partners/unops.svg', alt: 'UNOPS' }
              ].map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex justify-center hover:opacity-100 transition-opacity"
              >
                <Image 
                  src={partner.src} 
                  alt={partner.alt}
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section - Editorial Layout */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-corporate-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header - Asymmetrical */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-corporate-blue"></div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                  Current Availability
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-corporate-navy leading-tight mb-3 sm:mb-4">
                Selected
                <span className="block italic font-normal text-corporate-blue">Assets</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                Premium commercial spaces designed for the world's leading corporations.
              </p>
            </div>
            <Link 
              href="/properties" 
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-corporate-navy hover:text-corporate-blue transition-colors border-b-2 border-corporate-blue pb-2 self-start lg:self-end"
            >
              <span>View All Properties</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Properties Grid - Magazine Style */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          >
            {MOCK_PROPERTIES.map((property, idx) => (
              <motion.div 
                key={property.id} 
                variants={itemVariants}
                className={idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Sophisticated Layout */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-corporate-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20">
            {/* Left Column - Sticky */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-corporate-blue"></div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                    Core Competencies
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
                  Comprehensive Real Estate
                  <span className="block italic font-normal text-corporate-blue mt-2">Intelligence.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-8 sm:mb-12 font-sans">
                  We provide a lifecycle approach to commercial real estate, from acquisition and development consultancy to asset management and disposal.
                </p>
                
                {/* Feature Pills */}
                <div className="space-y-6">
                  {[
                    { icon: Award, text: 'ISO 9001 Certified Management' },
                    { icon: Globe, text: 'Global Standards, Local Insight' }
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-corporate-blue/10 border-2 border-corporate-blue/20 flex items-center justify-center text-corporate-blue group-hover:bg-corporate-blue/20 group-hover:scale-110 transition-all shadow-lg">
                        <feature.icon size={24} strokeWidth={2} />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wider font-sans">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Services Cards */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {MOCK_SERVICES.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="glass border border-white/10 p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-serif font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4 pr-8 sm:pr-12 md:pr-16">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-2xl font-sans">
                      {service.description}
                    </p>
                    <Link 
                      href="/services" 
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-corporate-blue hover:text-corporate-blue-light transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-corporate-blue group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial Style */}
      <section className="py-24 sm:py-32 lg:py-40 bg-corporate-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-corporate-blue"></div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                Client Feedback
              </span>
              <div className="h-px w-12 bg-corporate-blue"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-corporate-navy">
              The Voice of
              <span className="block italic font-normal text-corporate-blue">Authority</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 border-l-4 border-corporate-blue shadow-premium hover-lift relative"
              >
                {/* Quote Mark */}
                <div className="absolute top-8 right-8 text-6xl font-serif text-corporate-blue/10 leading-none">
                  "
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl italic font-serif text-corporate-navy leading-relaxed mb-6 sm:mb-8 relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-corporate-navy flex items-center justify-center text-white font-serif text-xl font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-corporate-navy mb-1 font-sans">
                      {testimonial.author}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-corporate-blue font-semibold font-sans">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-20 sm:py-32 md:py-40 lg:py-48 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-corporate-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-corporate-navy rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-corporate-blue"></div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-corporate-blue font-sans">
                Ready to Begin?
              </span>
              <div className="h-px w-16 bg-corporate-blue"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-corporate-navy leading-tight">
              Elevate Your
              <span className="block italic font-normal text-corporate-blue">Property Portfolio</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto font-sans">
              Partner with the consultants who understand Kampala's commercial landscape better than anyone else.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8">
              <a 
                href={getWhatsAppUrl('Hello! I would like to book a consultation about your commercial properties.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#25D366] text-white px-10 sm:px-12 py-5 sm:py-6 text-sm font-semibold uppercase tracking-wider hover:bg-[#20BA5A] transition-all duration-300 hover-lift shadow-premium flex items-center justify-center gap-3"
              >
                <MessageCircle size={18} />
                <span>Book via WhatsApp</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={getWhatsAppUrl('Hello! I have a property I would like to list with Sparta Properties.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-transparent border-2 border-corporate-navy text-corporate-navy px-10 sm:px-12 py-5 sm:py-6 text-sm font-semibold uppercase tracking-wider hover:bg-corporate-navy hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <span>List Your Property</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
