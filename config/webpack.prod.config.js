const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common,{
    mode:'production',
    output:{
        filename:'js/[name].[chunkhash:8].bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(sass|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },  
    plugins:[
        new HtmlWebpackPlugin({
            filename:'myindex.html',//打包之后的html文件名字
            template:'public/index.html',//以我们自己定义的html为模板生成
            inject:'body',//在body最底部引入js文件，如果是head，就是在head中引入js
            minify:{//压缩html文件
                removeComments:true,//去除注释
                collapseWhitespace:true,//去除空格
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash].css',
            chunkFilename:'css/[id].[hash].css'
        })
    ],
    optimization: {
        minimizer:[
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp:/\.css$/g,//用于匹配需要优化或者压缩的资源名
                cssProcessor:require("cssnano"),//用于压缩和处理css的处理器，默认是cssnano
                cssProcessorPluginOptions:{
                    preset:['default',{ discardComments:{ removeAll:true } }]
                },
                canPrint:true,//表示插件能够在console中打印信息
            })
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                },
                vendors: {
                    priority: -10,
                    test: /node_modules/,
                    name: "vendor",
                    enforce: true,
                },
            }
        }
    },
})
