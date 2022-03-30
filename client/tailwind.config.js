module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}
