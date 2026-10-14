/** @type {import('tailwindcss').Config} */
// Build: npm run build  (ver README.md). Salida: assets/styles.css (purgado + minificado).
module.exports = {
  content: ['./*.html', './*/index.html'], // raíz + páginas internas (carpeta/index.html); node_modules no coincide
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        brand: {
          dark: '#0F172A',
          card: '#1E293B',
          accent: '#2563EB',
          success: '#10B981',
        },
        text: {
          light: '#F8FAFC',
          gray: '#94A3B8',
          dark: '#1e293b',
        },
        whatsapp: { DEFAULT: '#25D366', dark: '#128C7E' },
      },
      boxShadow: { glow: '0 0 20px rgba(37, 99, 235, 0.3)' },
      animation: { 'fade-in': 'fadeIn 0.5s ease-in-out' },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
