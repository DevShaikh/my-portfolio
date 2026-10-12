import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14181f',
        muted: '#5a6472',
        line: '#dfe3e9',
        wash: '#f4f6f8',
        accent: { DEFAULT: '#0f766e', strong: '#0b5a54', soft: '#e3f3f1' },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: { page: '64rem' },
    },
  },
  plugins: [],
};
export default config;
