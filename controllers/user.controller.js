const User = require("../dataBase/User");
const CError = require('../error/CustomError');
const { uploadFile } = require("../services/s3.service");

async function updateUser(req, res, next) {
  try {
    res.status(201).json('Users was created');
  } catch (e) {
    next(e);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();

    res.json(users);
  } catch (e) {
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const { userId = '' } = req.params;

    if (userId.length !== 24) {
      throw new CError('Mongo Id is not valid', 403);
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new CError(`Use with ID ${userId} is not found`, 404);
    }

    res.json(user);
  } catch (e) {
    next(e);
  }
}

async function createUser(req, res, next) {
  try {
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    console.log(req.files);
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');


    const user = await User.createWithHashPassword(req.body);

    const { Location } = await uploadFile(req.files.userAcatar, 'user', user._id);

    const userWithPhoto = await User.findByIdAndUpdate(user._id, { avatar: Location }, { new: true })

    res.status(201).json(userWithPhoto);
  } catch (e) {
    next(e);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { userId = '' } = req.params;

    await User.deleteOne({ _id: userId });

    res.status(204).json('Users was created');
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createUser,
  deleteUser,
  getById,
  getAllUsers,
  updateUser
}
