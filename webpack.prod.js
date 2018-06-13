const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const path = require('path');

const extractCSS = new ExtractTextPlugin('css/[name].[hash].css');
const extractLESS = new ExtractTextPlugin('css/[name].[hash].less.css');

module.exports = merge(common, {
    mode: 'production',
    plugins:[
        extractLESS,
        extractCSS,
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/html/index.html')),
            minimize: true,
            styleExtensions: ['.css', '.less']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                    ]
                })
            }
        ]
    }
});