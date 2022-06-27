const { generateAuthTokens } = require("../services/token.service");
const passwordService = require("../services/password.service");
const emailService = require("../services/email.service");
const OAuth = require("../dataBase/OAuth");
const { WELCOME } = require("../constants/email-action.enum");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { password: hashPassword, _id, name } = req.user;
      const { password, email } = req.body;

      await emailService.sendMail('victor.fzs10@gmail.com', WELCOME, {userName: name}); // TEST CODE
      // await emailService.sendMail(email, WELCOME); // REAL CODE

      await passwordService.comparePassword(hashPassword, password);

      const tokens = generateAuthTokens();

      await OAuth.create({
        userId: _id,
        ...tokens
      })

      res.json({
        user: req.user,
        ...tokens
      });
    } catch (e) {
      next(e)
    }
  }
}
