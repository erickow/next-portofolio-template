module.exports = {
    webpack: function(config, { isServer }) {
      if (isServer) {
        require('./util/generateSitemap')
      }
  
      return config
    }
  }