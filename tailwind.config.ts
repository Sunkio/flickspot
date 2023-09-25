import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      const newUtilities = {
        '.click-3d': {
          transition: 'transform 0.3s',
          'transform-style': 'preserve-3d',
        },
        '.click-3d:active': {
          transform: 'translateY(2px) scale(0.98)',
        },
      };

      addUtilities(newUtilities, ['active']);
    }),
  ],
};
export default config;
