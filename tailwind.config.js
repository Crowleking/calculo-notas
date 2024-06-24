import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import themesConfig from './themes.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: themesConfig
  }
}
