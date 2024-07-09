const Mongoose = require('../db/conn')
const { Schema } = Mongoose

const User = Mongoose.model(
    'User',
    new Schema({
        name:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        phone:{
            type: String,
        },
        image:{
            type: String
        },
        // timeStamps: Cria duas colunas, uma que marca a data de criação e a outra de update
    }, {timeStamps: true}, )
)

module.exports = User