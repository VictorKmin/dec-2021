const userRouter = require('express').Router();

const userController = require("../controllers/user.controller");
const userMdlwr = require("../middlewares/user.middleware");
const authMdlwr = require("../middlewares/auth.middleware");

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userMdlwr.isNewUserValid, userMdlwr.isEmailRegistered, userController.createUser);
userRouter.delete('/:userId', authMdlwr.checkAccessToken, userController.deleteUser);
userRouter.put('/:userId', userController.updateUser);
userRouter.get('/:userId', userController.getById);

module.exports = userRouter;
