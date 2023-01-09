const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const terserMinify = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WebpackMerge = require('webpack-merge').default 

const baseConfig = {
    mode: process.env.NODE_ENV,
    entry: {
        'index': path.join(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new VueLoaderPlugin()
    ],
    externals: {
        'vue': 'window.Vue'
    }
}

let config = {}

if(process.env.NODE_ENV === 'development'){
    config = WebpackMerge(baseConfig, {
        devtool: 'inline-cheap-module-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname)
            },
            compress: true,
            port: 2023,
            hot: true
        },
        plugins: [
            new HtmlWebpackPlugin({ 
                title: 'Hello Vue', 
                filename: 'index.html', 
                template:'./index.html', 
                minify: false, 
                inject: false, 
                templateParameters: { 
                    publicPath: path.join(__dirname), 
                    js: [ './node_modules/vue/dist/vue.runtime.global.js', './index.js' ], 
                    css: [ './index.css' ]
                }
            }) 
        ]
    }) 
}else{
    config - WebpackMerge(baseConfig, {
        optimization: {
            minimizer: [
                new terserMinify(),
                new CssMinimizerPlugin({})
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'hello vue',
                filename: 'index.html',
                template: 'index.html',
                minify: false,
                inject: false,
                templateParameters: {
                    publicPath: path.join(__dirname),
                    js: [
                        'https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js', 
                        './index.js'
                    ],
                    css: [
                        './index.css'
                    ]
                }
            })
        ]
    })
}

module.exports = config