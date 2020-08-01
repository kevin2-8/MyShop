const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 新版vue-loader需要配置这个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
   },
   plugins:[
       new htmlWebpackPlugin({
           template: path.join(__dirname, './src/index.html'),
           filename: 'index.html'
       }),
       new VueLoaderPlugin()
   ],
   module: {
        rules: [
            //打包样式
            {test:/\.css$/, use:["style-loader", "css-loader"]},
            {test:/\.less$/, use:["style-loader", "css-loader","less-loader"]},
            {test:/\.vue$/, use:"vue-loader"},
            {test:/\.(ttf|woff|svg|otf|eot)$/, use:"url-loader"}
        ]
   },
   resolve: {
       //根据包名来指定其导入的相关文件
       alias: {
          // "vue$": "vue/dist/vue.js"
       }
   }
}