const path = require('path');
//this is a test
module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'client', 'index.js'),
  resolve: { extensions: ['.jsx', '.js']},
  devServer: {
    contentBase: 'build',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
      '/login' : 'http://localhost:3000',
      '/signup' : 'http://localhost:3000'
    },
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ]
      }
    ]
  }
}
