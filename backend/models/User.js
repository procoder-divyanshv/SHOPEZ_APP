const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // In a real app, we use bcrypt to hash this!
  avatar: { type: String, default: '👤' },
  color: { type: String, default: '#6366f1' }
});

module.exports = mongoose.model('User', userSchema);