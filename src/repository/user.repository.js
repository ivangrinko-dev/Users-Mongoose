const {TableUser} =require('../../db')


async function geteAllUserDb(){
await TableUser.create()
const data = await TableUser.find()
return data
}

async function createUserDb(user){
await TableUser.create(user)
const data = await TableUser.find()
return data
}

async function updateUserDb(user){
await TableUser.create(user)
const data = await TableUser.find()
return data
}

module.exports = {createUserDb, geteAllUserDb, updateUserDb}