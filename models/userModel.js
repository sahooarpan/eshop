const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  confirmPassword:{ type: String, required: true }
  
});

module.exports = mongoose.model('User', userSchema);