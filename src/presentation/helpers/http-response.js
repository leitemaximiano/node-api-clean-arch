const MissingParamError = require('./missing-param-error')

class HttpResponse {
  static badRequest (name) {
    return {
      statusCode: 400,
      body: new MissingParamError(name)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}

module.exports = HttpResponse
