const path = require('path')
const federations = require('test-react-scripts-cond/federations')
const merge = require('webpack-merge').merge

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = merge([
  {
    resolve: {
      alias: {
        '@img': path.resolve(`${process.env.SOURCES_PATH}/img`),
      },
    },
  },
  federations({
    exposes: {
      './Router': './src/app/common/router',
      './AppAccess': './src/app/common/session/AppAccess',
      './App': './src/app/App',
    },
  }),
])
