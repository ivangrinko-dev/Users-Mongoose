const {
  createUserDb,
  geteAllUserDb,
  updateUserDb,
  deleteUserDb,
} = require("../repository/user.repository");

async function geteAllUser() {
  const data = await geteAllUserDb();
  return data;
}

async function createUser(user) {
  const data = await createUserDb(user);
  return data;
}

async function updateUser(_id, user) {
  const data = await updateUserDb(_id, user);
  return data;
}

async function deleteUser(_id) {
  const data = await deleteUserDb(_id);
  return data;
}
module.exports = {
  createUser,
  geteAllUser,
  updateUser,
  deleteUser,
};
