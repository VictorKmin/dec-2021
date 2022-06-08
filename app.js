const express = require('express');
const axios = require('axios');
const fs = require('fs/promises');
const users = require('./dataBase/users');

const app = express();

app.get('/', async (req, res) => {
  console.log(req);

  const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

  res.status(resp.status).json(resp.data);
});

app.get('/users', async (req, res) => {
  let buffer = await fs.readFile('asdadasd');
  res.json(buffer.toString());
});

// CREATE
app.post('/users/:userName/create', (req, res) => {
  users.push({
    name: req.params.userName,
    age: Math.random()*100
  });

  res.status(201).json('Users was created');
});

app.delete('/users/:usersId', (req, res) => {
  users.push({
    name: 'TEST',
    age: Math.random()*100
  });

  res.status(201).json('Users was created')
});
app.put('/users/:usersId', (req, res) => {
  users.push({
    name: 'TEST',
    age: Math.random()*100
  });

  res.status(201).json('Users was created')
});

app.get('/users/:userId', (req, res) => {
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
});


app.listen(5000, () => {
  console.log('Server listen 5000')
});
