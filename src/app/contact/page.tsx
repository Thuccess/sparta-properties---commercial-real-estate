'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../../lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'Commercial Leasing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'Commercial Leasing',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-corporate-navy text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-corporate-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Connect</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">How Can We Help Your Business?</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Whether you're looking for office space, needing property management, or seeking an investment partner, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-corporate-navy mb-8">Send an Inquiry</h2>
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-green-50 border-2 border-green-200 p-8 rounded-sm text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-2">Thank You!</h3>
                    <p className="text-gray-600">We've received your inquiry and will respond within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-corporate-slate border border-gray-100 text-sm focus:outline-none focus:border-corporate-gold focus:ring-1 focus:ring-corporate-gold transition-colors" 
                        placeholder="Jane" 
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-corporate-slate border border-gray-100 text-sm focus:outline-none focus:border-corporate-gold focus:ring-1 focus:ring-corporate-gold transition-colors" 
                        placeholder="Doe" 
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Work Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-corporate-slate border border-gray-100 text-sm focus:outline-none focus:border-corporate-gold focus:ring-1 focus:ring-corporate-gold transition-colors" 
                        placeholder="jane@enterprise.com" 
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-corporate-slate border border-gray-100 text-sm focus:outline-none focus:border-corporate-gold focus:ring-1 focus:ring-corporate-gold transition-colors" 
                        placeholder="+256..." 
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Inquiry Type *</label>
                      <select 
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-corporate-slate border border-gray-100 text-sm focus:outline-none focus:border-corporate-gold focus:ring-1 focus:ring-corporate-gold transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-right pr-10"
                      >
                        <option>Commercial Leasing</option>
                        <option>Property Management</option>
                        <option>Investment Consultancy</option>
                        <option>List Your Property</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message *</label>
                      <textarea 
                        rows={6} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-corporate-slate border border-gray-100 text-sm focus:outline-none focus:border-corporate-gold focus:ring-1 focus:ring-corporate-gold transition-colors resize-none" 
                        placeholder="Provide as much detail as possible..."
                      ></textarea>
                    </div>
                    <div className="sm:col-span-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-corporate-navy text-white py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-corporate-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-corporate-navy mb-8">Get In Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-slate flex items-center justify-center text-corporate-gold shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1">Our Office</div>
                      <p className="text-gray-500 text-sm leading-relaxed">{COMPANY_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-slate flex items-center justify-center text-corporate-gold shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1">Call Us</div>
                      <p className="text-gray-500 text-sm">{COMPANY_PHONE}</p>
                      <p className="text-gray-400 text-xs">Mon-Fri, 8am-6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-slate flex items-center justify-center text-corporate-gold shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1">Email Us</div>
                      <p className="text-gray-500 text-sm underline">{COMPANY_EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-slate flex items-center justify-center text-corporate-gold shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider mb-1">Office Hours</div>
                      <p className="text-gray-500 text-sm">Weekdays: 8:00 - 18:00</p>
                      <p className="text-gray-500 text-sm">Weekends: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] bg-gray-200 border-4 border-white shadow-2xl relative group overflow-hidden">
                <img src="/images/contact-office.jpg" alt="Kampala Office" className="w-full h-full object-cover grayscale opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 shadow-2xl border border-gray-100 flex flex-col items-center">
                    <div className="w-12 h-12 bg-corporate-gold text-white rounded-full flex items-center justify-center mb-4">
                      <MapPin size={24} />
                    </div>
                    <div className="text-center">
                      <div className="font-serif font-bold text-lg">SPARTA HEADQUARTERS</div>
                      <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">Acacia Avenue, Kampala</div>
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-corporate-gold hover:text-corporate-navy transition-colors"
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

