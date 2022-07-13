require('dotenv').config();
const express = require('express');
const expressFileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/dec');

const userRouter = require('./routes/user.router');
const authRouter = require('./routes/auth.router');
const { NODE_ENV, CORS_WHITE_LIST } = require("./constants/config");
const cronRun = require("./cron");
const swaggerJson = require("./swagger.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (NODE_ENV !== 'prod') {
  const morgan = require('morgan');

// app.use(morgan(':remote-user [:date[clf]] :method :url :status ":user-agent"'));
  app.use(morgan('dev'));
}

app.use(expressFileUpload());
app.use('/auth', cors(_configureCors()), authRouter);
app.use('/users', userRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use('*', (req, res) => {
  res.status(404).json('Route not found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({
      error: err.message || 'Unknown Error',
      code: err.status || 500
    });
});

app.listen(5000, () => {
  console.log('Server listen 5000');
  cronRun();
});


function _configureCors() {
  const whitelist = CORS_WHITE_LIST.split(';');

  return {
    origin: (origin, callback) => {
      if (whitelist.includes(origin)) {
        return callback(null, true)
      }

      callback(new Error('Not allowed by CORS'));
    }
  }
}
