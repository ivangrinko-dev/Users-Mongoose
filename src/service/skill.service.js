const {
  createSkillDb,
  getAllSkillsDb,
  getSkillsByIdDb,
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

module.exports = { getAllSkills, getSkillsById, createSkill };
