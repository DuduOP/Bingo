import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import webpackCombineLoaders from 'webpack-combine-loaders';
import serverConfig from './server.config';

export default {
  devtool: 'sourcemap',
  watch: true,
  entry: {
    base: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new LiveReloadPlugin({
      hostname: serverConfig.url,
      appendScriptTag: true
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: webpackCombineLoaders([
          {
            loader: 'css-loader',
            query: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ]),
      },
      {
        test: /\.s[ac]ss$/,
        loader: webpackCombineLoaders([
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              camelCase: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMaps: 'true',
            },
          },
        ]),
      }
    ]
  }
}
