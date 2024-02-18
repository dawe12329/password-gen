const path = require('path');

module.exports = {
  entry: './Slider.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, '..'), // Output directory (project root directory)
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '..'), // Directory to serve static files from during development (project root directory)
    },
    port: 8080, // Optional: Specify the port for the development server
  },
};