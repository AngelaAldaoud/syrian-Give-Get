class APIResponse {
  static SUCCESS = { code: 1, message: 'SUCCESS' };

  static PAGE_NOT_FOUND = { code: 2, message: 'PAGE_NOT_FOUND' };

  // generic error response  {16 - 19}
  static INVALID_API_REQUEST = { code: 16, message: 'INVALID_API_REQUEST' };

  static INTERNAL_EXCEPTION = { code: 17, message: 'INTERNAL_EXCEPTION' };
}

module.exports = APIResponse;
