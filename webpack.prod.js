const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const path = require('path');

module.exports = merge(common, {
    mode: "production",
    plugins:[
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/template/*.html')),
            minimize: true
        })
    ]
});