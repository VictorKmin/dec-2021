const emailActions = require('../constants/email-action.enum')

module.exports = {
  [emailActions.WELCOME]: {
    subject: 'Weclome on board',
    template: 'welcome'
  },

  [emailActions.FORGOT_PASSWORD]: {
    subject: 'Opps looks like you forgot password',
    template: 'forgot-password'
  },

  [emailActions.USER_BANNED]: {
    subject: 'Account was blocked',
    template: 'account-blocked'
  }
}
