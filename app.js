const createServer = require('./src/utils/server');
const config = require('./src/configs/config');
const logger = require('./src/utils/logger');

const app = createServer();
app.listen(config.app.node_local_port, async () => {
  logger.info(`Server app listening on port ${config.app.node_local_port}`);
  logger.info(`Docs available at http://localhost:${config.app.node_local_port}/docs/`);
});

module.exports = app;
