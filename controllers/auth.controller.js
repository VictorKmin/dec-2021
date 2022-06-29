const { generateAuthTokens, generateActionToken } = require("../services/token.service");
const passwordService = require("../services/password.service");
const emailService = require("../services/email.service");
const OAuth = require("../dataBase/OAuth");
const ActionTokens = require("../dataBase/ActionTokens");
const User = require("../dataBase/User");
const { WELCOME, FORGOT_PASSWORD } = require("../constants/email-action.enum");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { _id, name } = req.user;
      const { password, email } = req.body;

      // await emailService.sendMail('victor.fzs10@gmail.com', WELCOME, { userName: name }); // TEST CODE
      // await emailService.sendMail(email, WELCOME); // REAL CODE

      await req.user.comparePasswords(password);

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
  },

  forgotPassword: async (req, res, next) => {
    try {
      const { _id, name } = req.user;
      const token = generateActionToken(FORGOT_PASSWORD, { name, _id });

      await ActionTokens.create({
        userId: _id,
        token,
        actionType: FORGOT_PASSWORD
      });

      await emailService.sendMail(
        'victor.fzs10@gmail.com',
        FORGOT_PASSWORD,
        { userName: name, token }
      );
      // await emailService.sendMail(email, WELCOME); // REAL CODE

      res.json('Ok');
    } catch (e) {
      next(e)
    }
  },

  setForgotPassword: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { password } = req.body;

      const hashPasswrod = await passwordService.hashPassword(password);
      const updatedUser = await User.findByIdAndUpdate(_id,{ password: hashPasswrod }, {new: true});

      await ActionTokens.deleteOne({actionType: FORGOT_PASSWORD, userId: _id});
      res.json(updatedUser)
    } catch (e) {
      next(e)
    }
  },
}
