
const User= require('../models/auth');
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const HttpError = require('../models/http-error')

const login = async(req, res, next)=>{
    const {Email, Password} = req.body
    let existingUser;
    try{
        existingUser =  await User.findOne({Email:Email})
    }catch(err){
     const error = new HttpError('login failed', 500)
     return next(error)
    }
     if(!existingUser){
        const error = new HttpError('user not found', 401)
        return next(error)
     }
     let isValidPass =  false;
     try{
        isValidPass =await  bcrypt.compare(Password, existingUser.Password)


     }catch{
        const error = new HttpError('login failed', 500)
        return next(error)
     }
     if(!isValidPass ){
        const error = new HttpError('login failed', 401)
        return next(error)
     }
     let token;
     try{
       token = jwt.sign({userId:existingUser._id, Email:existingUser.Email}, 'secret_key', {expiresIn:'1h'});
       
     }catch{
        const error = new HttpError('login failed', 401)
        return next(error) 
     }
     
      res.status(200).json({
        message:"loggedin",
        user: existingUser.toObject({getters:true}),
        token:token
    })
}


const SignUp=(req, res)=>{   

   const {FullName,Email, Password} =  req.body
   const erorrs = validationResult(req)
   if(!erorrs.isEmpty()){
    res.status(500).json({
        result:erorrs
    })
   }else{
   
    User.findOne({Email:Email})
    .then((reapaetUser)=>{
        if(reapaetUser){
            res.status(500).json({
                result:'Email is repeated'
            })
        }
         return bcrypt.hash(Password,12)
    }).then((Password)=>{

        const auth = new User({
            FullName,
            Email,
            Password,
          
        })
        auth.save()
        .then((response)=>{
            let token;
            try{
                token = jwt.sign({userId:response._id, Email:response.Email}, 'secret_key', {expiresIn:'1h'})

            }catch{
                const error = new HttpError('sign up failed', 401)
                return next(error)
            }

            res.status(201).json({
                result:response,
                token:token
            })
        
        })
        .catch(err=>{
            res.status(500).json({
                result:err
            })
        })
      
    })  .catch(err=>{
        res.status(500).json({
            result:err
        })
    })
    
  

    }
}

exports.login = login
exports.SignUp = SignUp
