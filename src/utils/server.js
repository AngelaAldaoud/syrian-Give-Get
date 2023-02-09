/*eslint-disable*/
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('../../routes');
const config = require('../configs/config');
const swaggerDocs = require('./swagger');

BigInt.prototype.toJSON = function toJSON() { return this.toString(); };
/* -------------------------------------------------------------------------- */
/*                     App initialize and middlewares setup                   */
/* -------------------------------------------------------------------------- */

function createServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      methods: 'GET,PATCH,POST,DELETE',
      origin: '*',
    }),
  );
  swaggerDocs(app, config.app.node_local_port);
  routes(app);
  
  return app;
}
module.exports = createServer;
