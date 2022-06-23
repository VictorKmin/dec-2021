const CError = require("../error/CustomError");
const { checkAccessToken } = require("../services/token.service");
const OAuth = require("../dataBase/OAuth");

module.exports = {
  checkAccessToken: async (req, res, next) => {
    try {
      const access_token = req.get('Authorization');

      if (!access_token) {
        throw new CError(`No token`, 401);
      }

      checkAccessToken(access_token);

      const tokenInfo = await OAuth.findOne({ access_token }).populate('userId');

      if (!tokenInfo) {
        throw new CError(`Token not valid`, 401);
      }

      req.user = tokenInfo.userId;

      next();
    } catch (e) {
      next(e);
    }
  }
}
