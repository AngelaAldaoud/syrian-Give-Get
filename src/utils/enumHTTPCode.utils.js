class HTTPCode {
  static OK = 200;

  static CREATED = 201;

  static ACCEPTED = 202;

  static BAD_REQUEST = 400;

  static UNAUTHORIZED = 401;

  static FORBIDDEN = 403;

  static NOT_FOUND = 404;

  static INTERNAL_SERVER_ERROR = 500;

  static SERVICE_UNAVAILABLE = 503;

  static CONFLICT = 409;

  static TOO_MANY_REQUEST = 429;
}

module.exports = HTTPCode;
