/**
指定入口和出口文件（需要打包文件路径和 指定后打包文件路径）

 */
const path=require('path')//引入路径模块
const htmlwebpackgluin=require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports={//通过node中的模块操作，向外暴露一个配置对象
    entry:path.join(__dirname,'./src/main.js'),//入口文件
    output:{//出口文件相关
        path:path.join(__dirname,'./dist'),//路径
        filename:'bundle.js'//指定文件名称
    },
   plugins:[
        new htmlwebpackgluin({//创建一个在内存中生成html的插件，有两个参数
            template:path.join(__dirname,'./src/index.html'),//指定模板，根据这个去生成内存中的页面
            filename:'index.html'//内存中生成页面的名称
        }),
      new VueLoaderPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ],
    module:{//用于配置第三方模块加载器
        rules:[//第三方模块的规则
            {test:/\.css$/,use:['style-loader','css-loader']},//参数一：用正则表达式处理以.css结尾的文件名，参数二：使用安装的这两个个插件名
           {test:/\.scss$/,use:['style-loader','css-loader','scss-loader']},
           /* {test:/\.less$/,use:['style-loader','css-loader','less-loader']},*/
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=989,226&name=[hash:8]-[name].[ext]'},//配置以这些结尾的使用此插件,后面可传参，默认图片是base64的字符串的，
                // 若不想为此格式可传参,限制他的字节(若文件大小大于指定参数，就不会再是base64)，再加参数，哈希值（8位）+图片名字+图片结尾都不变
           {test:/\.(ttf|eot|woff|woff2|svg)$/,use:'url-loader'},//参数一：用正则表达式处理以.css结尾的文件名，参数二：使用安装的这两个个插件名
           /* {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//通过exclude把/node_modules/文件夹中的js排除掉*/
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
   /* entry: {y
        app: ["babel-polyfill", "./src/main.js"]
    }*/
   resolve:{
       alias:{//修改vue被引进时的路径
           "vue$":"vue/dist/vue.esm.js"//以vue结尾的：路径
       }
   }
}