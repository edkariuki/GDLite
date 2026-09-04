/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                'brand': '#2547A8',
                'brand-hover': '#1e3a8a',
                'brand-focus': '#93c5fd',
                'brand-light': 'rgba(37, 71, 168, 0.1)',
                'brand-accent': '#EFA24C',

                // Standard Blues 
                'blue-accent': '#3b82f6',
                'blue-accent-light': '#60a5fa',

                // Surface / Background Colors
                'surface-light': '#F9FAFB',
                'surface-card': '#FFFFFF',
                'surface-hero': '#0F172A',

                // Text Content Colors
                'content-primary': '#111827',
                'content-body': '#4B5563',
                'content-secondary': '#6B7280',
                'content-muted': '#D1D5DB',

                // Borders & Dividers
                'stroke': '#E5E7EB',
                'stroke-light': '#F3F4F6',
            },
        },
    },
    plugins: [],
}