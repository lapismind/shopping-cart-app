const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'My Shopping Cart';
        return args;
      });
  }
};

// webpack.config.js 或 vue.config.js
const webpack = require('webpack');

module.exports = {
  // 其他配置项
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: 'true', // 如果你使用了Options API, 默认是true
        __VUE_PROD_DEVTOOLS__: 'false', // 默认是false
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false' // 添加这一行
      })
    ]
  }
};
