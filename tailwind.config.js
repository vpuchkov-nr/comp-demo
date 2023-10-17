/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /./,
      variants: ['hover', 'active'],
    },
  ],
  theme: {
    spacing: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      // 'border-width-1': '1px',
      // 'border-width-2': '2px',
    },

    colors: {
      blue: {
        100: '#e6f7ff',
        200: '#a8dfff',
        300: '#7acaff',
        400: '#52b4ff',
        500: '#2795f5',
        600: '#0074e8',
        700: '#005ac2',
        800: '#00439c',
        900: '#002f75',
        1000: '#001d4f',
      },
      red: {
        100: '#fff2f0',
        200: '#ffd5cf',
        300: '#ffafa6',
        400: '#f58078',
        500: '#eb625d',
        600: '#dc2626',
        700: '#b5161b',
        800: '#8f0a13',
        900: '#69020c',
        1000: '#420109',
      },
      green: {
        100: '#deffe7',
        200: '#a6eeb9',
        300: '#71cd8a',
        400: '#43b766',
        500: '#20a54c',
        600: '#008933',
        700: '#006529',
        800: '#00461f',
        900: '#002d15',
        1000: '#001f0f',
      },
      yellow: {
        100: '#fffce6',
        200: '#fff1a3',
        300: '#ffe77a',
        400: '#ffd952',
        500: '#ffc929',
        600: '#ffb600',
        700: '#d69200',
        800: '#a46a00',
        900: '#895400',
        1000: '#663c00',
      },
    },
    extend: {
      boxShadow: {
        small: '0 4px 8px 0 rgba(0,0,0,0.08)',
        medium: '0 4px 16px 0 rgba(0,0,0,0.15)',
        'input-default': '0 0 0 2px #A8DFFF',
        'input-error': '0 0 0 2px #FFD5CF',
      },
      borderRadius: {
        1: '3px',
        2: '6px',
        3: '12px',
        full: '100px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['14px', '21px'],
        // base: ['16px', '24px'],
      },
      colors: {
        grayscale: {
          100: '#ffffff',
          200: '#f8fafc',
          300: '#f0f4f8',
          400: '#e7ecf1',
          500: '#d0d7de',
          600: '#bac0c7',
          700: '#a5acb4',
          800: '#8c939f',
          900: '#656c78',
          1000: '#555b64',
          1100: '#424850',
          1200: '#393f48',
          1300: '#2e323a',
          1400: '#25282e',
          1500: '#1b1e22',
          1600: '#121417',
        },
      },
    },
  },
  plugins: [],
};
