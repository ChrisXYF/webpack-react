const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/index.js',  //入口文件
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },  //出口文件
    module: {
        rules: [
            {
                test: /\.css$/,     // 解析css
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/'   // 图片打包后存放的目录
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/   //提高效率，不管n_m
            }
            
        ]
    },  //处理对应模块
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new ExtractTextWebpackPlugin('./src/index.css')
    ] //对应插件
};
