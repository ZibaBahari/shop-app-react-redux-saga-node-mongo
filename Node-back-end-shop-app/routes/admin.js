const express = require('express');
const Router = express.Router();
const ProductController = require('../controller/product')
const multer = require('multer');
const fs = require('fs');
const checkAuth = require('../middleware/check-auth')
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
    
        const dir='./public/uploads/product';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
     

        cb(null, dir)
    },
    filename:(req, file, cb)=>{
       
        cb(null, new Date().toISOString().replace(/:/g, '-')+file.originalname)
    }
})


const fileType =(req, file, cb)=>{

    if(files.mimetype === 'image/png' || files.mimetype === 'image/jpg'||files.mimetype === 'image/jpeg'){

        cb(null,true)
    }else{
        cb(null, false)
    }
 }


const upload = multer({storage:storage},{fileType:fileType}).array('Image',10);


Router.get('/product',ProductController.getProduct)
Router.use(checkAuth)
Router.put('/product',  upload, ProductController.addProduct)
Router.delete('/product', ProductController.deleteProduct)

module.exports = Router