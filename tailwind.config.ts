import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      screens: {
        xs: '480px',
        sm: '602px',
        md: '768px',
        lg: '1025px',
        xl: '1202px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        primary: {
          ...colors.orange,
          DEFAULT: colors.orange['600']
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        oren: '#f97316',
        orens: '#ea580c',
        darkblue: '#010021',
        jacarta: {
          base: '#5A5D79',
          50: '#F4F4F6',
          100: '#E7E8EC',
          200: '#C4C5CF',
          300: '#A1A2B3',
          400: '#7D7F96',
          500: '#5A5D79',
          600: '#363A5D',
          700: '#131740',
          800: '#101436',
          900: '#0D102D'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'slide-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' }
        },
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'slide-right': 'slide-right 50s linear infinite',
        'slide-left': 'slide-left 50s linear infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')
  ]
} satisfies Config

export default config
