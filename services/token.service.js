const jwt = require('jsonwebtoken');
const CError = require("../error/CustomError");
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require("../constants/config");

function generateAuthTokens(payload = {}) {
  const access_token = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refresh_token = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

  return {
    access_token,
    refresh_token
  }
}

function checkAccessToken(token = '') {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch (e) {
    throw new CError(`Token not valid`, 401);
  }
}

module.exports = {
  checkAccessToken,
  generateAuthTokens
}
