/* eslint-disable import/extensions */
/* -------------------------------------------------------------------------- */
/*                              Routes Import                               */
/* -------------------------------------------------------------------------- */
const { buildAPIResponse } = require('./src/utils/responseBuilder.utils');
const HTTPCode = require('./src/utils/enumHTTPCode.utils');
const APIResponse = require('./src/utils/enumAPIResponse.utils');
const orderRouter = require('./src/routes/order.routes');

/* -------------------------------------------------------------------------- */
/*                           Bind routes to the app                           */
/* -------------------------------------------------------------------------- */

module.exports = function routes(app) {
  app.use(orderRouter);
  // to Handling routing error.
  app.use((req, res, next) => {
    const error = new Error('PAGE_NOT_FOUND');
    error.statusCode = HTTPCode.NOT_FOUND;
    error.response = APIResponse.PAGE_NOT_FOUND;
    error.message = APIResponse.PAGE_NOT_FOUND.message;
    return next(error);
  });
  // to handling all kind of error
  app.use((err, req, res) => {
    res.status(err.statusCode || 500).send(buildAPIResponse(err.response, err.message));
  });
};
