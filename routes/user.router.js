const userRouter = require('express').Router();

const userController = require("../controllers/user.controller");
const userMdlwr = require("../middlewares/user.middleware");

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userMdlwr.checkUserOnCreate, userController.createUser);
userRouter.delete('/:userId', userController.deleteUser);
userRouter.put('/:userId', userController.updateUser);
userRouter.get('/:userId', userController.getById);

module.exports = userRouter;
