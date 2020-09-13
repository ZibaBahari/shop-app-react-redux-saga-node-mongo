const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema =  new Schema({
    Product_id:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'Product'
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref: 'User'
    },

    count:{
        type:Number,
        required:true
    },
  

})

module.exports = mongoose.model('Cart', cartSchema)