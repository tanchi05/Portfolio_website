/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:       '#080c10',
        bg2:      '#0d1117',
        bg3:      '#111820',
        surface:  '#131c26',
        surface2: '#1a2535',
        border1:  '#1e2f42',
        border2:  '#264059',
        accent:   '#00d4aa',
        accent2:  '#00a882',
        tx1:      '#e2eaf4',
        tx2:      '#8fa4bc',
        tx3:      '#4d6277',
        amber:    '#ffa502',
        blue:     '#3498db',
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0.4 },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
        blink:  'blink 1s infinite',
      },
    },
  },
  plugins: [],
}
