const path = require('path')
const px2rem = require('postcss-px2rem')
module.exports = {
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    px2rem({
                        remUnit:37.5    //设计稿等分后的rem值 375/10
                    })
                ]
            }
        }
    },
    configureWebpack:{ //内部写webpack原生配置
       /* 模块引入解析 */
        resolve:{
            /*
                1.简化模块路径的编写
                2.加快打包 
            */
            alias:{ //模块路径别名
                '@':path.resolve(__dirname,'src'),
                '@components':path.resolve(__dirname,'src/components'),
                '@common':path.resolve(__dirname,'src/common'),
                //'vue$':'vue/dist/vue.esm.js'  //配置vue引入的为带template编译器的版本
            },
            extensions:['.js','.vue']   //指定哪些模块的后缀名可以省略
        },
        //开发服务器
        devServer: {
            // port:8081,
            // open:true,
            //contentBase: './dist', //将 dist 目录下的文件 serve 到 localhost:8080 下
            //hot: true   //启用热模替换
            //配置代理
            /* proxy: {
                '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {'^/api' : ''}
                }
            } */
            //historyApiFallback:true, //任意404响应都可能需要被替换为index.html
        },
    }
}