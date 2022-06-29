const jwt = require('jsonwebtoken');

const CError = require("../error/CustomError");
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, FORGOT_PASS_ACTION_SECRET } = require("../constants/config");
const { FORGOT_PASSWORD } = require("../constants/email-action.enum");

function generateAuthTokens(payload = {}) {
  const access_token = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refresh_token = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

  return {
    access_token,
    refresh_token
  }
}

function generateActionToken(actionType, payload = {}) {
  let secretWord = '';
  let expiresIn = '7d';

  switch (actionType) {
    case FORGOT_PASSWORD:
      secretWord = FORGOT_PASS_ACTION_SECRET;
      break;

    default:
      throw new CError('Wrong action type', 500);
  }


  return jwt.sign(payload, secretWord, { expiresIn })
}

function checkAccessToken(token = '') {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch (e) {
    throw new CError(`Token not valid`, 401);
  }
}

function checkActionToken(token = '', actionType) {
  let secretWord = '';

  switch (actionType) {
    case FORGOT_PASSWORD:
      secretWord = FORGOT_PASS_ACTION_SECRET;
      break;

    default:
      throw new CError('Wrong action type', 500);
  }

  return jwt.verify(token, secretWord);
}

module.exports = {
  checkAccessToken,
  checkActionToken,
  generateActionToken,
  generateAuthTokens
}
