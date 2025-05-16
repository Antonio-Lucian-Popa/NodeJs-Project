const prisma = require('../config/db');

async function getAllUsers() {
  return prisma.user.findMany();
}

async function createUser(data) {
  return prisma.user.create({ data });
}

module.exports = { getAllUsers, createUser };