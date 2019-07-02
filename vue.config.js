const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const JSDOMRenderer = require('@prerenderer/renderer-jsdom');

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
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'), // The path to the webpack-outputted app to prerender.
        routes: ['/'], // List of routes to prerender.
        renderer: new JSDOMRenderer(),
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        }
      })
    ]
  }
};
