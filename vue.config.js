var path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, "src/mixins/_responsive")
        ]
      }
    }
  },

  productionSourceMap: false,

  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
