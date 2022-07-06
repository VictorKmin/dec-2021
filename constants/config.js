module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'local',
  CORS_WHITE_LIST: process.env.CORS_WHITE_LIST || '',

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'ats',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'rts',
  FORGOT_PASS_ACTION_SECRET: process.env.FORGOT_PASS_ACTION_SECRET || 'fg_pass',

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'email@email.com',
  NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || '12345',

  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  AWS_S3_REGION: process.env.AWS_S3_REGION,
  AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY,
  AWS_S3_SECRET_KEY: process.env.AWS_S3_SECRET_KEY,
}
