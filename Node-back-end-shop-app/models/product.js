const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema =  new Schema({
    Name:{
        type:String, 
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Image:{
        type:Array,
        
    },
    Carts: [{ type: mongoose.Types.ObjectId, required: true,  ref: 'Cart' }]


})

module.exports = mongoose.model('Product', productSchema)