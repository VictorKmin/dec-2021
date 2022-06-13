const userRouter = require('express').Router();

const carsContoller = require("./carsController");

userRouter.get('/', carsContoller.getAllUsers);
userRouter.post('/', carsContoller.createUser);
userRouter.delete('/:usersId', carsContoller.deleteUser);
userRouter.put('/:usersId', carsContoller.updateUser);
userRouter.get('/:userId', carsContoller.getById);

module.exports = userRouter;

// /stat => { jun: [{вода: 33}, {газ: 15}] }
// /v1/stat => { jun: [{вода: 33}, {газ: 15}] }

// /stat => { jun: { water: { price: 6, count: 33 } } }
// /v2/stat => { jun: { water: { price: 6, count: 33 } } }


// /v17/stat =>
