
const HttpError = require('../models/http-error')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            throw new HttpError('auth failed')
        }
    const decodedToken = jwt.verify(token, 'secret_key')
    req.userData = {
        userId:decodedToken.userId
    }
    next()
    }catch{
      const error = new HttpError('auth failed', 401)
      return next(error)
    }

}