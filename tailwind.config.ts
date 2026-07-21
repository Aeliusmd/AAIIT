/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ["'Inclusive Sans'", 'Inter', 'system-ui', 'sans-serif'],
        heading: ["'Inclusive Sans'", 'Syne', 'sans-serif'],
        body: ["'Inclusive Sans'", 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'draw-a': 'drawA 4s ease-in-out infinite',
        'pulse-node': 'pulseNode 2.5s ease-in-out infinite',
        'pulse-node-delayed': 'pulseNode 2.5s ease-in-out 0.6s infinite',
        'pulse-node-slow': 'pulseNode 2.5s ease-in-out 1.2s infinite',
        'flow-line': 'flowLine 5s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scene-enter': 'sceneEnter 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'draw-line': 'drawLine 2s ease-out forwards',
        'pop-in': 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'bounce-gentle': 'bounceGentle 1.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        drawA: {
          '0%': { strokeDashoffset: '1200' },
          '40%': { strokeDashoffset: '0' },
          '60%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-1200' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.3', r: '3' },
          '50%': { opacity: '1', r: '5.5' },
        },
        flowLine: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-300' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sceneEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '500' },
          '100%': { strokeDashoffset: '0' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}