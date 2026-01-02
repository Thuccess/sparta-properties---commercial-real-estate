/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-serif)', 'serif'],
        'sans': ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        'corporate-navy': '#0a0f1a',
        'corporate-blue': '#1da1f2',
        'corporate-slate': '#f8f9fa',
        'corporate-charcoal': '#1a1f2e',
        'corporate-cream': '#faf8f3',
        'corporate-blue-light': '#4db3f2',
        'corporate-blue-dark': '#0d8bd9',
        'corporate-navy-light': '#1a2332',
        'corporate-navy-dark': '#05080f',
        // Legacy support
        'corporate-gold': '#1da1f2',
        'corporate-gold-light': '#4db3f2',
        'corporate-gold-dark': '#0d8bd9',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

