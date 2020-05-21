let path = require('path')
let MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css公共文件
let { VueLoaderPlugin } = require('vue-loader') // vue-loader  15.x版本以后需要引入
let HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成html
let CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝静态资源
let { CleanWebpackPlugin } = require('clean-webpack-plugin') // 打包前清除dist
let webpack = require('webpack')

module.exports = {
  useEslint: false,
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, '../src/main.js')
  ],
  output: {
    filename: 'js/[name].[hash:8].js', // 打包后的js文件放在js目录下，添加hash值防止缓存
    chunkFilename: 'js/[name].[hash:8].js', // 配合按需加载路由来使用，用来修改打包后的各个JS模块文件名字，具体请看下方打包后的截图
    path: path.resolve(__dirname, '../dist') // 输出的目录
    // publicPath: '/'     //静态资源cdn的地址。publicPath的使用是分环境的。在使用html-webpack-plugin 生成index.html时，publicPath是可以不用配置的。
  },
  stats: { // 本地起服务或者打包时候，清除过多的日志信息，精简控制台信息。
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    assets: false // 不显示资源打包信息
  },
  module: { // 转换规则
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { // webpack在打包时，首先会把图片打包到 /dist/images/ 文件夹下，但是在css文件中引用时，会将路径替换为下面的publicPath + name。
              publicPath: '../',
              resources: ['../src/styles/coolhue.scss']
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 20 * 1024, // 不设置这个的话，打包后的图片默认是超过8k时，会以base64编码
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.json'], // 能够使用户在引入模块时不带扩展名字, 自动解析
    alias: { // 别名，方便快速查找模块
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      title: '这是自定义的名字，请随意',
      favicon: path.resolve(__dirname, '../public/favicon.ico'), // 浏览器标题的图标
      hash: true,
      minify: {
        removeAttributeQuotes: true, // 删除属性的引号
        collapseWhitespace: true // 删除空白符与折叠行
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: path.resolve(__dirname, '../dist/copyAssets')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new webpack.ProgressPlugin() // 显示打包进度的插件
  ]
}
