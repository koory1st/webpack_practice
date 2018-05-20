const _ = require('lodash');
const Log = require('log');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const businessConfig = require('./src/js/business.config');

const entryPrefixPath = './src/js/';
const entryPrefixName = './js/business/';
let entry = entryPrefixPath + "index.js";
if (businessConfig.pageList.length) {
    entry = {};
    businessConfig.pageList.forEach((page)=>{
        entry[entryPrefixName + page] = path.resolve(__dirname, entryPrefixPath + page);
    });
}

let log = new Log('info');

log.info("1111212121212121BusinessConfig");
log.info(entry);

module.exports = {
    entry: entry,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/template/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test : /\.js$/,
                    name: './js/commons',
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
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};