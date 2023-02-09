/**
 * Response Data schema
 * @global
 * @typedef {Object} Response
 * @property {number} response
 * @property {number} message
 * @property {object} data
 */

/**
 * Build Response success
 * @param {number} response response in body res
 * @param {String} message message in body res
 * @param {Object} data data in body res
 * @returns {Response} The body for all Success responses
 */

exports.buildAPIResponse = function buildAPIResponse(apiResponse, message, data) {
  const responseObject = {
    response: apiResponse.code,
    message: message || apiResponse.message,
    data: data || {},
  };
  return responseObject;
};
