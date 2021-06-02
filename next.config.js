/* eslint-disable */

const fs = require('fs');
const path = require('path');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/theme.less'), 'utf8')
);

const env = process.env.NODE_ENV || 'development';

const envConfigs = {
  development: {
    INDIA_WEBSITE_URL: 'https://rynanprinting.com/india',
    WEBSITE_URL: 'http://localhost:3000/',
    API_URL: 'https://cms-rynanprinting.chanceupon.co/',
    LOGIN_URL: 'https://rynanprinting.com/partner-login/wisebizdl.php'
  },
  production: {
    INDIA_WEBSITE_URL: 'https://rynanprinting.com/india',
    WEBSITE_URL: 'https://rynanprinting.com/',
    API_URL: 'https://cms-rynanprinting.chanceupon.co/',
    LOGIN_URL: 'https://rynanprinting.com/partner-login/wisebizdl.php'
  }
}[env];

module.exports = withCSS(
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    },
    webpack: (config, { isServer }) => {
      config.module.rules
        .filter((el) => el.test == '/\\.css$/')[0]
        .use.unshift({
          loader: 'raw-loader',
          options: {
            esModule: false
          }
        });
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader'
        });
      }
      return config;
    },
    env: envConfigs
  })
);
