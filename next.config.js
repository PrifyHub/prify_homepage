/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  ...nextTranslate()
}
