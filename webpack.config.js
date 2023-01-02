const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = process.env.NODE_ENV
const isProduction = env === 'production'

module.exports = {
  //mode: 'development',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  entry: ['./src/js/index.js'],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './build'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015'
        },
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
      filename: 'index.html',
      minify: false
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      PropTypes: 'prop-types'
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port: 8081
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
} 