module.exports = {
  publicPath: './',//打包后的位置(如果不设置这个静态资源会报404)
  outputDir: 'XuZhouProject',//打包后的目录名称
  assetsDir: 'static',//静态资源目录名称
  devServer: {
    open: true, // process.platform === "darwin"
    disableHostCheck: true, // 解决Invalid Host header 
    host: '127.0.0.1',
    port: 8080,
    // https: false,
    // hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // 由于本项目数据通过easy-mock和mockjs模拟，不存在跨域问题，无需配置代理;
    // proxy: {
    //     '/api': {
    //         target: 'http://0.0.0.0:8080',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': 'test'
    //         }
    //     }
    // } 
    // before: app => {}
  }, // 第三方插件配置
  // webpack相关配置
  chainWebpack: (config) => {
    // config.entry.app = ['./src/main.js'];
    config.resolve.alias
      .set('@', resolve('src'))
      .set('#', resolve('public'))
  },
  // pluginOptions: {
  //     // ...
  // },
  // 加载less加载器，路径：./public/css/common.less
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: ['./public/css/common.less', './public/css/variable.less'],
        })
        .end()
    })
  },
};