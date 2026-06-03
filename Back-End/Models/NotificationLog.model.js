const mongoose = require('mongoose');

const notificationLogSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: {
    type: String,
    required: true 
  },
  body: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ['medication_reminder', 'health_tip', 'family_request'],
    required: true
  },

  isRead: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('NotificationLog', notificationLogSchema);