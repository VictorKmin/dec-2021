const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },

  age: {
    type: Number,
    default: 20
  },

  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = model('user', UserSchema);

// Viktor.Kmin@gmail.com
// viktor.kmin@gmail.com
