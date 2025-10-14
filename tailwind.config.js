/** @type {import { 'tailwindcss' }.Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  Plugins: [require('daisyui')],
  daisyui: {
    theme: ['light', 'dark', 'synthwave'],
  },
};
