module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  productionSourceMap: true,

  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
};
