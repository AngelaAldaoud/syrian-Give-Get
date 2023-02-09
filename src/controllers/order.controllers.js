const HTTPCode = require('../utils/enumHTTPCode.utils');
const APIResponse = require('../utils/enumAPIResponse.utils');
const { buildAPIResponse } = require('../utils/responseBuilder.utils');
const logger = require('../utils/logger');
const { addOrder, findAll, getOrderList } = require('../services/order.services');

exports.addOrderHandler = async function addOrderHandler(req, res, next) {
  try {
    const data = req.body;
    const { city } = data;
    const { typeOrder } = data;
    const { metaName } = data;
    const { phone } = data;
    const { details } = data;
    const orderData = {
      typeOrder,
      metaName,
      phone,
      city,
      details,
    };
    await addOrder(orderData);
    const results = await findAll(typeOrder);
    return res.status(HTTPCode.OK).send(buildAPIResponse(APIResponse.SUCCESS, 'Order Added successfully', results));
  } catch (ex) {
    logger.error(ex);
    return next(res.status(HTTPCode.INTERNAL_SERVER_ERROR)
      .send(buildAPIResponse(APIResponse.INTERNAL_EXCEPTION)));
  }
};

// exports.search = async function search(req, res, next) {
//   try {
//     // const city = req.body.city || {};
//     // const word = req.body.word || {};
//     const typeOrder = req.body.typeOrder || {};
//     const results = await getOrderList(typeOrder);
//     return res.status(HTTPCode.OK).
// send(buildAPIResponse(APIResponse.SUCCESS, 'Orders list', results));
//   } catch (ex) {
//     logger.error(ex);
//     return next(res.status(HTTPCode.INTERNAL_SERVER_ERROR)
//       .send(buildAPIResponse(APIResponse.INTERNAL_EXCEPTION)));
//   }
// };

exports.donationList = async function donationList(req, res, next) {
  try {
    // const city = req.body.city || {};
    // const word = req.body.word || {};
    const typeOrder = 2;
    const results = await getOrderList(typeOrder);
    return res.status(HTTPCode.OK).send(buildAPIResponse(APIResponse.SUCCESS, 'Donation list', results));
  } catch (ex) {
    logger.error(ex);
    return next(res.status(HTTPCode.INTERNAL_SERVER_ERROR)
      .send(buildAPIResponse(APIResponse.INTERNAL_EXCEPTION)));
  }
};

exports.assistantList = async function assistantList(req, res, next) {
  try {
    // const city = req.body.city || {};
    // const word = req.body.word || {};
    const typeOrder = 1;
    const results = await getOrderList(typeOrder);
    return res.status(HTTPCode.OK).send(buildAPIResponse(APIResponse.SUCCESS, 'Assistant list', results));
  } catch (ex) {
    logger.error(ex);
    return next(res.status(HTTPCode.INTERNAL_SERVER_ERROR)
      .send(buildAPIResponse(APIResponse.INTERNAL_EXCEPTION)));
  }
};
