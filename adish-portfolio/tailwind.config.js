/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070A',
          900: '#080B10',
          800: '#0D1119',
          700: '#131826',
          600: '#1A2233',
          500: '#232C41',
        },
        cyan: {
          DEFAULT: '#4FD8FF',
          soft: '#8FE8FF',
          dim: '#1F6E80',
        },
        violet: {
          DEFAULT: '#8B7FFF',
          soft: '#B5ADFF',
          dim: '#4A4499',
        },
        paper: '#E9EDF5',
        mute: '#7C879C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'glow-radial':
          'radial-gradient(600px circle at var(--x) var(--y), rgba(79,216,255,0.08), transparent 40%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(79,216,255,0.35)',
        'glow-violet': '0 0 40px -10px rgba(139,127,255,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
