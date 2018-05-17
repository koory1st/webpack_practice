# webpack_practice webpack实践
此仓库是webpack4.0的自我学习实践
## 目的
实践webpack，尝试用webpack4.0构建一套适用于自己的环境。

## 功能
* 开发和生产环境区分（npm run start）（npm run build）
* 使用html模板（html-webpack-plugin）
* 清理dist文件夹（clean-webpack-plugin）
* hash文件名防缓存
* css自动加浏览器前缀（postcss-loader）
* css文件去除无用部分（purifycss），生产环境简化css

## 命令
* npm init -y
* npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env --save-dev
* npm install webpack webpack-cli --save-dev
* npm install --save-dev style-loader css-loader
* npm install --save-dev html-webpack-plugin
* npm install clean-webpack-plugin --save-dev
* npm install --save-dev webpack-merge
* npm install --save-dev webpack-dev-server
* npm install --save-dev postcss-loader
* npm install --save-dev extract-text-webpack-plugin@next (目前没有webpack4.0的正式版本，使用beta版)
* npm i -D purifycss-webpack purify-css
* npm install eslint --save-dev
* ./node_modules/.bin/eslint --init
