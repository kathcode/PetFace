const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpack({ template: 'src/index.html' })],
  module: {
    rules: [
      {
        test: /\.js$/, // All the js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
