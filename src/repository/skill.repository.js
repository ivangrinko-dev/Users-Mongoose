const { TableSkills, ObjectId } = require("../../db");

async function getAllSkillsDb() {
  const data = await TableSkills.find();
  return data;
}

async function createSkillDb(skill) {
  await TableSkills.create(skill);
  const data = await TableSkills.find();
  return data;
}

async function getSkillsByIdDb(_id) {
  const data = await TableSkills.findOne({ _id: new ObjectId(_id) });
  return data;
}

async function updateSkillDb(_id, skill) {
  await TableSkills.updateOne({ _id: new ObjectId(_id) }, { $set: skill });
  const data = await TableSkills.findOne();
  return data;
}

async function deleteSkillDb(_id) {
  await TableSkills.deleteOne({ _id: new Object(_id) });
  const data = await TableSkills.findOne();
  return data;
}

module.exports = {
  getAllSkillsDb,
  createSkillDb,
  getSkillsByIdDb,
  updateSkillDb,
  deleteSkillDb
};
