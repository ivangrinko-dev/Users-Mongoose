const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/teacher')

const TableUser = mongoose.model('javascripts', {
    email: String,
    password: String,
    age: Number
})

const ObjectId = mongoose.Types.ObjectId

module.exports = { TableUser, ObjectId }