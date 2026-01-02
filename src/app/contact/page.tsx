'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, Clock, Calendar, Building2, FileText, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_WHATSAPP, COMPANY_ADDRESS, COMPANY_PO_BOX, COMPANY_PHONE_2, getWhatsAppUrl } from '../../lib/constants';
import WhatsAppButton from '../../components/ui/WhatsAppButton';

export default function Contact() {
  const quickActions = [
    {
      title: 'Book a Viewing',
      message: 'Hello! I would like to schedule a property viewing. Please let me know your available times.',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Property Inquiry',
      message: 'Hello! I have questions about your commercial properties. Could you provide more information?',
      icon: Building2,
      color: 'bg-corporate-blue'
    },
    {
      title: 'List My Property',
      message: 'Hello! I have a commercial property I would like to list. Can we discuss this?',
      icon: FileText,
      color: 'bg-yellow-500'
    },
    {
      title: 'General Inquiry',
      message: 'Hello! I would like to learn more about your services.',
      icon: HelpCircle,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-corporate-navy text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-corporate-blue text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4 block">Connect</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
              Book via WhatsApp
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Get instant responses and book property viewings directly through WhatsApp. Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* WhatsApp Booking Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-corporate-navy">WhatsApp Booking</h2>
                  <p className="text-sm text-gray-600">Instant communication, immediate response</p>
                </div>
              </div>

              <div className="bg-corporate-cream p-6 sm:p-8 rounded-lg border border-corporate-blue/20 mb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Click the floating WhatsApp button (bottom right) to open our booking form, or use the quick action buttons below to send a direct message.
                </p>
                <a
                  href={getWhatsAppUrl('Hello! I would like to get in touch about your properties.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors shadow-lg"
                >
                  <MessageCircle size={20} />
                  <span>Open WhatsApp</span>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-corporate-navy mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickActions.map((action, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => window.open(getWhatsAppUrl(action.message), '_blank')}
                      className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-[#25D366] hover:shadow-lg transition-all text-left group"
                    >
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <action.icon size={24} className="text-white" />
                      </div>
                      <div className="font-semibold text-corporate-navy group-hover:text-[#25D366] transition-colors">
                        {action.title}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-corporate-navy mb-6 sm:mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-corporate-blue/10 border border-corporate-blue/20 flex items-center justify-center text-corporate-blue shrink-0 rounded-lg">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1 text-corporate-navy">WhatsApp</div>
                      <a 
                        href={getWhatsAppUrl('Hello!')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] text-lg font-semibold hover:underline"
                      >
                        {COMPANY_WHATSAPP}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Available 24/7 for instant responses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-corporate-blue/10 border border-corporate-blue/20 flex items-center justify-center text-corporate-blue shrink-0 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1 text-corporate-navy">Our Office</div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {COMPANY_ADDRESS}
                        <br />
                        <span className="text-gray-500">{COMPANY_PO_BOX}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-corporate-blue/10 border border-corporate-blue/20 flex items-center justify-center text-corporate-blue shrink-0 rounded-lg">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1 text-corporate-navy">Phone Numbers</div>
                      <a 
                        href={`tel:${COMPANY_WHATSAPP}`}
                        className="text-corporate-blue text-sm font-semibold hover:underline block"
                      >
                        {COMPANY_WHATSAPP}
                      </a>
                      <a 
                        href={`tel:${COMPANY_PHONE_2}`}
                        className="text-corporate-blue text-sm font-semibold hover:underline block mt-1"
                      >
                        {COMPANY_PHONE_2}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-corporate-blue/10 border border-corporate-blue/20 flex items-center justify-center text-corporate-blue shrink-0 rounded-lg">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1 text-corporate-navy">Response Time</div>
                      <p className="text-gray-700 text-sm">We respond to WhatsApp messages within minutes during business hours</p>
                      <p className="text-gray-500 text-xs mt-1">Mon-Fri: 8am-6pm | Weekends: Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] bg-gray-200 border-4 border-white shadow-2xl relative group overflow-hidden rounded-lg">
                <Image 
                  src="/images/contact-office.jpg" 
                  alt="Kampala Office" 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-corporate-navy/40 group-hover:bg-corporate-navy/20 transition-colors">
                  <div className="bg-white p-6 shadow-2xl border border-gray-100 flex flex-col items-center rounded-lg">
                    <div className="w-12 h-12 bg-corporate-blue text-white rounded-full flex items-center justify-center mb-4">
                      <MapPin size={24} />
                    </div>
                    <div className="text-center">
                      <div className="font-serif font-bold text-lg">SPARTA HEADQUARTERS</div>
                      <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">Block 7, Katwe, Kampala</div>
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-corporate-blue hover:text-corporate-navy transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
