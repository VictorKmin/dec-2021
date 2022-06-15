const CError = require('../error/CustomError');

module.exports = {
  checkUserOnCreate: (req, res, next) => {
    try {
      const { email = '', name = '', password = '', age = 0 } = req.body;

      if (!email || !password || !name) {
        throw new CError('Some is filed is missing');
      }

      if (password.length < 5) {
        throw new CError('Password should include at least 5 symbols');
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  isEmailRegistered: () => {

  }
}
