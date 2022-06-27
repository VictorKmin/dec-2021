module.exports = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'ats',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'rts',

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'email@email.com',
  NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || '12345'
}
