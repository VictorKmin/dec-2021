const { Schema, model } = require('mongoose');

const passwordService = require('../services/password.service')

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
  },

  avatar: String
}, { timestamps: true });

UserSchema.methods = { // for single record // THIS - RECORD
  async comparePasswords(password) {
    await passwordService.comparePassword(this.password, password);
  }
}

UserSchema.statics = { // for schema // THIS - SCHEMA
  createWithHashPassword: async function(userToSave) {
    const hashedPassword = await passwordService.hashPassword(userToSave.password);

    return this.create({...userToSave, password: hashedPassword});
  }
}

module.exports = model('user', UserSchema);

// Viktor.Kmin@gmail.com
// viktor.kmin@gmail.com
