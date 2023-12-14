const {
  createSkillDb,
  getAllSkillsDb,
  getSkillsByIdDb,
  updateSkillDb,
  deleteSkillDb,
} = require("../repository/skill.repository");

async function createSkill(skill) {
  const data = await createSkillDb(skill);
  return data;
}

async function getAllSkills() {
  const data = await getAllSkillsDb();
  return data;
}

async function getSkillsById(_id) {
  const data = await getSkillsByIdDb(_id);
  return data;
}

async function updateSkill(_id, skill) {
  const data = await updateSkillDb(_id, skill);
  return data;
}

async function deleteSkill(_id) {
  const data = deleteSkillDb(_id);
  return data;
}

module.exports = {
  getAllSkills,
  getSkillsById,
  createSkill,
  updateSkill,
  deleteSkill,
};
