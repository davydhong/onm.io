const workspaceRouter = require('express').Router();
const workspaceController = require('../controllers/workspace.controller');

workspaceRouter.get('/', (req, res) => {
  res.send('workspace working');
});
// workspaceRouter.all('/', workspaceController);

module.exports = workspaceRouter;
