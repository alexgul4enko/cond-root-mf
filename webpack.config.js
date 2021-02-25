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
    name: 'condRootMf',
    remotes: {
      condAuthPages: 'condAuthPages@http://localhost:3002/remoteEntry.js',
      condLayouts: 'condLayouts@http://localhost:3003/remoteEntry.js',
      condFormElements: 'condFormElements@http://localhost:3004/remoteEntry.js',
    },
    exposes: {
      './Router': './src/app/common/router',
      './AppAccess': './src/app/common/session/AppAccess',
      './App': './src/app/App',
    },
  }),
])
