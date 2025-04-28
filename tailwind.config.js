/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B52D9',
          light: '#4E66F0',
          dark: '#2A3B9E'
        },
        secondary: {
          DEFAULT: '#6E24D6',
          light: '#8448E5',
          dark: '#5118A0'
        },
        accent: {
          DEFAULT: '#FFD166',
          light: '#FFDF8C',
          dark: '#E5B73D'
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669'
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706'
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'data-flow': 'dataFlow 15s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        dataFlow: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      }
    },
  },
  plugins: [],
};