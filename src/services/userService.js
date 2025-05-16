const userModel = require('../models/userModel');

async function listUsers() {
  return userModel.getAllUsers();
}

async function registerUser(userData) {
  return userModel.createUser(userData);
}

module.exports = { listUsers, registerUser };