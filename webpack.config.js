const getDevConfig = require('./webpack/webpack.dev.config');
const getProdConfig = require('./webpack/webpack.prod.config');

module.exports = env => {
  switch (env) {
    case 'production':
      return getProdConfig(env)
    case 'development':
      return getDevConfig(env)
    default:
      return getProdConfig(env)
  }
}
