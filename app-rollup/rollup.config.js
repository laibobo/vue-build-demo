
const path = require('path');
const fs = require('fs');
const { babel } = require('@rollup/plugin-babel');
const vue = require('rollup-plugin-vue');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const replace = require('@rollup/plugin-replace');
const html = require('@rollup/plugin-html');
const serve = require('rollup-plugin-serve');

/**
 * @babel/core，Babel 官方模块，用来编译 JavaScript 代码；
@babel/preset-env，Babel 官方预设模块，用来辅助 @babel/core 编译最新的 ES 特性；
@rollup/plugin-babel，Rollup 的 Babel 插件，必须配合 @bable/core 和 @babel/preset-env 一起使用；
@rollup/plugin-commonjs，是 Rollup 官方插件，用来处理打包编译过程中 CommonJS 模块类型的源码；
@rollup/plugin-html，是 Rollup 官方插件，用来管理项目的 HTML 页面文件；
@rollup/plugin-node-resolve，是 Rollup 官方插件，用来打包处理项目源码在 node_modules 里的使用第三方 npm 模块源码；
@rollup/plugin-replace，是 Rollup 官方插件，用来替换源码内容，例如 JavaScript 源码的全局变量 process.env.NODE_ENV；
rollup，Rollup 的核心模块，用来执行 Rollup 项目的编译操作；
rollup-plugin-postcss，第三方模块，用于将 Vue.js 项目源码的 CSS 内容分离出独立 CSS 文件；
rollup-plugin-serve，第三方模块，用于 Rollup 项目开发模式的 HTTP 服务；
rollup-plugin-vue，Vue.js 官方提供的 Rollup 插件模块。
*/

const babelOptions = {
  "presets": [
    '@babel/preset-env',
  ],
  'babelHelpers': 'bundled'
}

module.exports = {
  input: path.join(__dirname, 'src/index.js'),
  output: {
    file: path.join(__dirname, 'dist/index.js'),
  }, 
  plugins: [
    vue(),
    postcss({
      extract: true,
      plugins: []
    }),
    nodeResolve(),
    commonjs(),
    babel(babelOptions),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true
    }),
    html({
      fileName: 'index.html',
      template: () => {
        const htmlFilePath = path.join(__dirname, 'index.html')
        const html = fs.readFileSync(htmlFilePath, { encoding: 'utf8' })
        return html;
      }
    }),
    process.env.NODE_ENV === 'development' ? serve({
      port: 6001,
      contentBase: 'dist'
    }) : null
  ],
}