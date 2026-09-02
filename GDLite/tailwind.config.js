/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#2547A8',
                    hover: '#1e3a8a',
                    focus: '#93c5fd',
                    light: 'rgba(37, 71, 168, 0.1)',
                },

                surface: {
                    light: '#F9FAFB',
                    card: '#FFFFFF',
                    hero: '#0F172A',
                },

                content: {
                    primary: '#111827',
                    body: '#4B5563',
                    muted: '#D1D5DB',
                },

                stroke: {
                    DEFAULT: '#E5E7EB',
                    light: '#F3F4F6',
                },
            },
        },
    },
    plugins: [],
}