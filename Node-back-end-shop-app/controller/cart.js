
const Cart = require('../models/cart');



module.exports.getCart=(req, res)=>{
    Product.find()
    .then(response=>{
        res.status(200).json({
            result:response
        })

    }).catch(err=>{
        res.status(500).json({
            result: err
        })
})
}


module.exports.addCart=(req, res,next)=>{
   const user_id =  req.userData.userId
    req.body.forEach(element => {
        const cart = new Cart({
            count:element.count,
            Product_id:element._id,    
            user_id: user_id
    
        })
        cart.save()
       })
 
    .then(response=>{
        res.status(201).json({
            result:response
        })
    
    })
    .catch(err=>{
        res.status(500).json({
            result:err
        })
    })
}

    

    
module.exports.deleteCart=(req, res)=>{
    Product.remove({_id: req.body.id})
    .then(response=>{
     res.status(200).json({
         result:'ok'
     })
    })
    .catch(err=>{
     res.status('500').json({
         result:err
     })
   
})
}
