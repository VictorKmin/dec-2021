const users = require("../dataBase/users");

function updateUser(req, res) {
  try {
    users.push({
      name: 'TEST',
      age: Math.random() * 100
    });

    res.status(201).json('Users was created');
  } catch (e) {
    res.status(400).json(e.message || 'Unknown Error');
  }
}

function getAllUsers(req, res) {
  try {
    res.json(users);

  } catch (e) {
    res.status(400).json(e.message || 'Unknown Error');
  }
}

function getById(req, res) {
  try {
    console.log(req.query);

    const { model = '' } = req.query;

    console.log('____________________');
    console.log(model);
    console.log('____________________');

    const modelToFind = model.split(';');

    console.log('************************************');
    console.log(modelToFind);
    console.log('************************************');

    const userIndex = +req.params.userId;

    if (isNaN(userIndex) || userIndex < 0) {
      res.status(400).json('Please enter valid ID');
      return;
    }

    const user = users[userIndex];

    if (!user) {
      res.status(404).json(`Use with ID ${userIndex} is not found`);
      return;
    }

    res.json(user);
  } catch (e) {
    res.status(400).json(e.message || 'Unknown Error');
  }
}

function createUser(req, res) {
  try {
    console.log(req.body);

    res.status(201).json('Users was created');
  } catch (e) {
    res.status(400).json(e.message || 'Unknown Error');
  }
}

function deleteUser(req, res) {
  try {
    users.push({
      name: 'TEST',
      age: Math.random() * 100
    });

    res.status(201).json('Users was created');
  } catch (e) {
    res.status(400).json(e.message || 'Unknown Error');
  }
}

module.exports = {
  createUser,
  deleteUser,
  getById,
  getAllUsers,
  updateUser
}
