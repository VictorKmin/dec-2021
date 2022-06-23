const userRouter = require('express').Router();

const authController = require("../controllers/auth.controller");
const userMdlwr = require("../middlewares/user.middleware");

userRouter.post('/login', userMdlwr.checkIsUserPresent, authController.login);

module.exports = userRouter;
