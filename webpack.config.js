const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin =  require('copy-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: resolve(__dirname,'dist'),
    // assetModuleFilename: 'img/[name].[hash:6][ext]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        // type: 'asset/resource',//类似file-loader
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:2][ext]',
          // outputPath: 'img1'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
        // type: 'asset/inline',类似url-loader
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       esModule: false,
        //       name: '[name].[hash:6].[ext]',
        //       outputPath: 'img'
        //     }
        //   }
        // ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.html',
        filename: 'index.html'
      }
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      // BASE_URL = '"./"'
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       globOptions: {
    //         ignore: ['**/index.html']
    //       }
    //     }
    //   ]
    // })
  ],
  mode: 'development',
  devtool: false,
}
/*
  [ext]:文件扩展名
  [name]:文件名
  [hash]:根据文件内容生成的哈希
  [contentHash]：
  [hash:<lenght>]:
  [path]:
*/