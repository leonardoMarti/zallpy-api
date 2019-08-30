const { user } = require("../database/models");

async function getUsers() {
  const users = await user.findAll();
  return users;
}

async function saveUser(params) {
  const userCreated = await user.create(params);
  return userCreated;
}

async function login(params) {
  let success = false;

  const login = await user.findOne({
    where: { name: params.name, password: params.password }
  });

  if (login) {
    success = true;
  }

  return success;
}

module.exports = { getUsers, saveUser, login };
