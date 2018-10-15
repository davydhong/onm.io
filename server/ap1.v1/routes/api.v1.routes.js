const apiV1Router = require('express').Router();
const workspaceRouter = require('./workspace.routes');

apiV1Router.use(
  '/workspace',
  (req, res, next) => {
    // console.log('LOGGING FROM HOST - DELEGATING TO ARTISTS ROUTER');
    next();
  },
  workspaceRouter
);

module.exports = apiV1Router;
