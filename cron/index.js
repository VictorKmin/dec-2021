const cron = require('node-cron');

const deleteOldOauthTokens = require('./remove-old-oauth-tokens.crom');

module.exports = () => {
  cron.schedule('0 0 1 * *', deleteOldOauthTokens)
  // cron.schedule('*/10 * * * * *', deleteOldOauthTokens)
}
