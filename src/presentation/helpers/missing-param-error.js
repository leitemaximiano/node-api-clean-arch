class MissingParamError extends Error {
  constructor (nameParam) {
    super(`Missing Param ${nameParam}`)
    this.name = 'MissingParamError'
  }
}

module.exports = MissingParamError
