module.exports = {
  plugins: {
    tailwindcss: { config: './tailwindcss.config.js' },
    autoprefixer: {},
  },
}


// Add your instrumentation key or use the APPLICATIONINSIGHTSKEY environment variable on your production machine to start collecting data.
// var ai = require('applicationinsights');

// ai.setup(process.env.APPLICATIONINSIGHTSKEY || 'your_instrumentation_key').start(); module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
