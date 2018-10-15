const path = require('path');
const express = require('express');
const cors = require('cors');
const compression = require('compression');

require('console-stamp')(console, 'HH:MM:ss.l');

const app = express();
app.use(require('morgan')('short'));
app.use(cors());
app.use(compression());

// ----------------------------------------
// TODO: User Authentification
// ----------------------------------------

// ----------------------------------------
// * webpack hot re-load setup
// ----------------------------------------
const webpack = require('webpack');
const webpackConfigDev = require('../webpack.dev.js');
const compilerDev = webpack(webpackConfigDev);
const webpackConfigCommon = require('../webpack.dev.js');
const compilerCommon = webpack(webpackConfigCommon);

app.use(
  require('webpack-dev-middleware')(compilerCommon, {
    logLevel: 'warn',
    publicPath: webpackConfigCommon.output.publicPath
  })
);

app.use(
  require('webpack-hot-middleware')(compilerDev, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);
// ----------------------------------------
// * Static Pages
// ----------------------------------------
// app.use(express.json());
console.log(__dirname + '/../public/index.home.html');
console.log(__dirname + '/../public/index.login.html');

app.use('/', express.static(__dirname + '/../public'));
app.use('/login', express.static(__dirname + '/../public/index.login.html'));
app.use('/workspace', express.static(__dirname + '/../public/index.workspace.html'));

// ----------------------------------------
// TODO: Routes
// ----------------------------------------
const apiV1Router = require('./ap1.v1/routes/api.v1.routes.js');

app.use(
  '/api/v1',
  (req, res, next) => {
    // console.log('LOGGING FROM HOST delegating');
    next();
  },
  apiV1Router
);

app.use('/*', express.static(__dirname + '/../public/index.404.html'));

// ----------------------------------------
// Listen
// ----------------------------------------
app.listen(process.env.ONM_PORT || 3000, function onStart(err) {
  if (err) {
    console.error(err);
  }
  console.info(`==> 🌎 Listening on port %s. Open up http://127.0.0.1:${process.env.ONM_PORT || 3000}/ in your browser.`);
});
