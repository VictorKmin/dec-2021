const userRouter = require('express').Router();

const authController = require("../controllers/auth.controller");
const userMdlwr = require("../middlewares/user.middleware");
const authMdlwr = require("../middlewares/auth.middleware");
const { FORGOT_PASSWORD } = require("../constants/email-action.enum");

userRouter.post('/login', userMdlwr.checkIsUserPresent, authController.login);
userRouter.post('/password/forgot', userMdlwr.checkIsUserPresent, authController.forgotPassword);
userRouter.post('/password/forgot/set', authMdlwr.checkActionToken(FORGOT_PASSWORD), authController.setForgotPassword);

module.exports = userRouter;
