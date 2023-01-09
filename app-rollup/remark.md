1. @babel/core，Babel 官方模块，用来编译 JavaScript 代码；
2. @babel/preset-env，Babel 官方预设模块，用来辅助 @babel/core 编译最新的 ES 特性；
3. @rollup/plugin-babel，Rollup 的 Babel 插件，必须配合 @bable/core 和 @babel/preset-env 一起使用；
4. @rollup/plugin-commonjs，是 Rollup 官方插件，用来处理打包编译过程中 CommonJS 模块类型的源码；
5. @rollup/plugin-html，是 Rollup 官方插件，用来管理项目的 HTML 页面文件；
6. @rollup/plugin-node-resolve，是 Rollup 官方插件，用来打包处理项目源码在 node_modules 里的使用第三方 npm 模块源码；
7. @rollup/plugin-replace，是 Rollup 官方插件，用来替换源码内容，例如 JavaScript 源码的全局变量 process.env.NODE_ENV；
8. rollup，Rollup 的核心模块，用来执行 Rollup 项目的编译操作；
9. rollup-plugin-postcss，第三方模块，用于将 Vue.js 项目源码的 CSS 内容分离出独立 CSS 文件；
10. rollup-plugin-serve，第三方模块，用于 Rollup 项目开发模式的 HTTP 服务；
11. rollup-plugin-vue，Vue.js 官方提供的 Rollup 插件模块。