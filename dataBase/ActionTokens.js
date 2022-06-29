const { Schema, model } = require('mongoose');

const emailActions = require('../constants/email-action.enum')

const ActionTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  token: {
    type: String,
    required: true
  },

  actionType: {
    type: String,
    enum: Object.values(emailActions),
    required: true
  },
}, { timestamps: true });

module.exports = model('action_tokens', ActionTokenSchema);
