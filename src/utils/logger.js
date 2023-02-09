const pino = require('pino');
const dayjs = require('dayjs');

const logger = pino({
  base: undefined,
  timestamp: () => `, "time" : "${dayjs().format()}"`,
});

module.exports = logger;
