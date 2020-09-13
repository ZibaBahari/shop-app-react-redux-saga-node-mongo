
const Product = require('../models/product');



module.exports.getProduct=(req, res)=>{
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


module.exports.addProduct=(req, res,next)=>{
    if(req.files !== undefined){
        let Image=[];
       req.files.forEach(element => {
           Image =[...Image, element.path]
       });
    const product = new Product({
        Name:req.body.Name,
        Description:req.body.Description,    
        Image: Image,
        Price:req.body.Price

    })
    product.save()
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
else{
    res.status(500).json({
        error:'type is not allowed'
    })
}
    }

    
module.exports.deleteProduct=(req, res)=>{
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
