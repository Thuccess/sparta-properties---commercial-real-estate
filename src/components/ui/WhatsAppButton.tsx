'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Calendar, MapPin, User, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_WHATSAPP, getWhatsAppUrl } from '../../lib/constants';

interface WhatsAppButtonProps {
  propertyTitle?: string;
  propertyLocation?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ propertyTitle, propertyLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingMessage = `🏢 *Property Viewing Request*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not provided'}

📅 *Preferred Date:* ${formData.date || 'Flexible'}
⏰ *Preferred Time:* ${formData.time || 'Flexible'}

${propertyTitle ? `🏢 *Property:* ${propertyTitle}` : ''}
${propertyLocation ? `📍 *Location:* ${propertyLocation}` : ''}

💬 *Message:*
${formData.message || 'I would like to schedule a property viewing.'}

---
*Sent from Sparta Properties Website*`;

    const whatsappUrl = getWhatsAppUrl(bookingMessage);
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      message: '',
    });
    setIsOpen(false);
  };

  const quickMessage = (type: 'viewing' | 'inquiry' | 'info') => {
    let message = '';
    
    if (type === 'viewing') {
      message = `Hello! I'm interested in scheduling a property viewing. ${propertyTitle ? `Property: ${propertyTitle}` : ''}`;
    } else if (type === 'inquiry') {
      message = `Hello! I have an inquiry about your commercial properties.`;
    } else {
      message = `Hello! I'd like more information about your services.`;
    }
    
    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all group"
        aria-label="Open WhatsApp booking"
      >
        <MessageCircle size={24} className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[#25D366] rounded-full opacity-75"
        />
      </motion.button>

      {/* Booking Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[90vw] max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#25D366] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-lg">
                      <MessageCircle size={26} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Book via WhatsApp</h3>
                      <p className="text-sm text-white/90">We'll respond immediately</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 bg-corporate-slate border-b">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">Quick Actions</p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => quickMessage('viewing')}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  >
                    Viewing
                  </button>
                  <button
                    onClick={() => quickMessage('inquiry')}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  >
                    Inquiry
                  </button>
                  <button
                    onClick={() => quickMessage('info')}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  >
                    Info
                  </button>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                    <User size={14} className="inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-corporate-slate border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                    <Phone size={14} className="inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-corporate-slate border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                    placeholder="+256 700 000000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                    <Mail size={14} className="inline mr-1" />
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-corporate-slate border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      <Calendar size={14} className="inline mr-1" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-corporate-slate border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      ⏰ Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-corporate-slate border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                    <MessageCircle size={14} className="inline mr-1" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-corporate-slate border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 resize-none"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white py-4 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-gray-500 text-center">
                  You'll be redirected to WhatsApp to complete your booking
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;

