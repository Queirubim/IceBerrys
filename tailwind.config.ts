import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        yuji: ['var(--font-yuji-mai)', 'monospace'],
      },
      backgroundImage: {
        'hero-image': 'url(/images/sunday-hero.png)',
        waves: 'url(/images/waves.svg)',
        landscape: 'url(/images/landscape.jpeg)',
        landscape2: 'url(/images/landscape2.jpeg)',
      },
      boxShadow: {
        shadowCard: '10px 10px 23px 3px rgba(0,0,0,0.24);',
      },
      screens: {
        xs: '460px',
      },
    },
  },
  darkMode: 'class',
};
export default config;
