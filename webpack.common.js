const _ = require('lodash');
const Log = require('log');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const businessConfig = require('./config/business.config');

const entryPrefixPath = 'src/js/';
const entryPrefixName = 'js/business/';
let entry = './src/js/index.js';
if (businessConfig.entryList.length) {
    entry = {};
    businessConfig.entryList.forEach((page) => {
        entry[entryPrefixName + page] = path.resolve(__dirname, entryPrefixPath + page);
    });
}

let log = new Log('info');

log.info('1111212121212121BusinessConfig');
log.info(entry);

module.exports = {
    entry: entry,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/html/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /\.js$/,
                    name: 'js/commons',
                    chunks: 'all'
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/js'),
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }]
    }
};