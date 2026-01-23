import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A1628',
          'navy-light': '#1A2332',
          cyan: '#00A3FF',
          'cyan-bright': '#1E90FF',
          blue: '#0D7FFF',
        },
        accent: {
          orange: '#FF6B35',
          'orange-bright': '#FF7F50',
          'red-orange': '#FF4500',
          'red-orange-bright': '#FF5722',
          gold: '#FFB800',
          'gold-light': '#FFA500',
        },
        neutral: {
          white: '#FFFFFF',
          'off-white': '#F5F5F5',
          'light-gray': '#E8E8E8',
          gray: '#808080',
          'medium-gray': '#999999',
          'dark-gray': '#333333',
          'darker-gray': '#2A2A2A',
          black: '#000000',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #1A2332 50%, #2D1B69 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00A3FF 0%, #FF6B35 100%)',
        'gradient-button': 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 163, 255, 0.5), 0 0 40px rgba(0, 163, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 163, 255, 0.8), 0 0 60px rgba(0, 163, 255, 0.5)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
