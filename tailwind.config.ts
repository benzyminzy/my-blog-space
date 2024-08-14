import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        robotoSerif: ['var(--font-roboto-serif)'],
        notoSans: ['var(--font-noto-sans)'],
      },
      fontSize: {
        '4xxl': [
          '40px',
          {
            lineHeight: '1',
          },
        ],
      },
      width: {
        54: '12.5rem', // 200px
        content: '75rem', // 1200px
      },
      margin: {
        auto: '0 auto',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['wireframe', 'black'],
    darkTheme: 'black',
  },
};
export default config;
