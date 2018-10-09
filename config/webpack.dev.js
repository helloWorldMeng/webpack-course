const path = require("path");
module.exports = {
    // 入口：有且可以有多个
    entry: {
        main: ["./src/main.js"]
    },
    // 打包环境：开发（development） & 生产(produvtion) 
    mode: "development",
    // 出口：有且只能有一个
    output:{
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'
    },
    devServer:{
        contentBase: "dist",
        overlay: true
    },
    module:{
        rules:[
            //css loaders
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader"
                    }
                ]  
            },
            //html loaders
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].html"
                        }
                    },
                    {
                        loader:"extract-loader",
                    },
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    }
                ]  
            },
            //img loaders
            {
                test:/\.(jpg|gif|png)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            // name:"images/[name]-[hash:8].[ext]"
                            name:"images/[name].[ext]"
                        }
                    }
                ]  
            }
        ]
    }
}