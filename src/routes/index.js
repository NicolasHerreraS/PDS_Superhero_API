const express = require('express');
const superheroRouter = require('./superheroes.router');
const superheroRouterV2 = require('./superhero_v2.router');
const superheroRouterV3 = require('./superhero_v2.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/superheroes', superheroRouter);
  router.use('/superheroes_v2', superheroRouterV2);
}

module.exports = routerApi;
