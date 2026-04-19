/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- CAMBIAR tailwindcss POR ESTO
    autoprefixer: {},
  },
};
export default config;
