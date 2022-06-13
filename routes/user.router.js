const userRouter = require('express').Router();

const userController = require("../controllers/user.controller");

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.delete('/:usersId', userController.deleteUser);
userRouter.put('/:usersId', userController.updateUser);
userRouter.get('/:userId', userController.getById);

module.exports = userRouter;
