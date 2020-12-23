const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {

    // 可以更改模式
    mode: "development",

    // 入口
    entry: ['./src/index.js'],
    
    // 输出
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },

    // 开发环境
    devServer: {
        // 运行时文件打包文件夹（不可见）
        contentBase: path.join(__dirname, './src'),
        publicPath: '/',
        // 运行端口
        host: 'localhost',
        port: 80,
        // 服务器文件压缩
        compress: true,
        // 自动打开浏览器
        open: true,
        // 热更新
        hot: true,
    },

    target: 'web',

    // 模块配置
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'eslint-loader'}
                ]
            },
            {
                test: /\.css$|\.scss$|\.sass$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },

    // 插件配置
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html', // 生成的html文件名（相对路径：将生成到output.path指定的dist目录下）
            // filename: path.join(__dirname, 'index.html'), // 生成的html(绝对路径：可用于生成到根目录)
        }),
        new ProgressBarPlugin(),
    ],

    // 配置解析
    resolve: {
        modules: [path.resolve(__dirname, '../node_modules')],
        alias: {
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@styles': path.resolve(__dirname, '../src/styles'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@router': path.resolve(__dirname, '../src/router')
        }
    },
}