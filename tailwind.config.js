import { Bold } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Regular: 'Almarai-Regular',
        Bold: 'Almarai-Bold',
        Light: 'Almarai-Light',
      },
    },
  },
  plugins: [],
};
