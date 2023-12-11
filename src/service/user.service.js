const { createUserDb, geteAllUserDb, updateUserDb } = require("../repository/user.repository");

async function geteAllUser() {
  const data = await geteAllUserDb();
  return data;
}

async function createUser(user) {
  const data = await createUserDb(user);
  return data;
}

async function updateUser(id_, user) {
  const data = await updateUserDb(_id, user);
  return data;
}

module.exports = {
  createUser,
  geteAllUser,
  updateUser
};
