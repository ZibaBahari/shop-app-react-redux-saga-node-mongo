const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema =  new Schema({
    FullName:{
        type:String, 
        required:true
    },
    Email:{
        type:String, 
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Carts: [{ type: mongoose.Types.ObjectId, required: true,  ref: 'Cart' }]

  

})

module.exports = mongoose.model('User', usersSchema)