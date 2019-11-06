# webpack-react
自己动手用webpack搭建react脚手架 并制作TodoList
用Webpack搭建React脚手架

版本问题，都是血和泪啊啊啊啊

1.npm init项目
2.创建 webpack文件
  可以直接webpack.conf.js直接写一起，也可以分为base，dev开发，prod生成分别写

Webpack.base.conf.js: 写出打包入口，出口以及其他配置
entry , output , module , plugins

webpack.dev.conf.js: 主要mergebase然后开发服务器配置
webpack.prod.conf.js: 开发模式配置

3.需要安装的所有插件及依赖
npm install -D webpack webpack-cli
webpack工具
npm install -D 
html-webpack-plugin   html打包插件
clean-webpack-plugin    
webpack-dev-server 
css-loader   css样式loader
extract-text-webpack-plugin@next   打包到js里的css文件进行一个拆分,单独提取css
webpack-merge   
style-loader

4.配置scripts
 "start": "webpack-dev-server --open --config webpack.dev.conf.js",
  "build": "webpack --config webpack.prod.conf.js"
5.配置Babel. (血和泪)
npm install -D 
babel-preset-env 
babel-loader 
babel-polyfill 
babel-preset-react
创建 .babelrc 	写presets配置

5.安装React和React-dom
npm install --save react react-dom

坑点：
1.报错:CleanWebpackPlugin is not a constructor
解决：
//修改webpack.base.conf.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
new CleanWebpackPlugin()

2.要babel-loader降版本
3.babel-core安装
版本一定要都在6或者7以上，版本不统一改哭都没用，会出现各种错误
