const { TableSkills, ObjectId } = require("../../db");

async function getAllSkillsDb() {
    const data =  await TableSkills.find()
    return data
}


async function createSkillDb(skill) {
await TableSkills.create(skill)
const data = await TableSkills.find()
return data
}

async function getSkillsByIdDb(_id){
    const data =  await TableSkills.findOne({ _id: new ObjectId(_id)})
    return data
}

module.exports ={getAllSkillsDb, createSkillDb, getSkillsByIdDb}