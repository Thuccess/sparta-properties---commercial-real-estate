/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'corporate-navy': '#1a2332',
        'corporate-gold': '#d4af37',
        'corporate-slate': '#f5f7fa',
        'corporate-charcoal': '#2c3e50',
      },
    },
  },
  plugins: [],
};

