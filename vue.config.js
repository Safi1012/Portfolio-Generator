module.exports = {
  chainWebpack: config => {
    config.module
      .rule('yml')
      .test(/\.yml$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .use('yaml-loader')
      .loader('yaml-loader');
  }
};
