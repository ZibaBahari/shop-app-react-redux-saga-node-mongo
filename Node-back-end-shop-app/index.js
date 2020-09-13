
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const adminRoute = require('./routes/admin');
const authRoute = require('./routes/auth')
const cartRoute = require('./routes/cart')
const path = require('path');


app.use(cors());
const directory = path.join(__dirname, '/public');
app.use('/public', express.static(directory));


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser:true,
useUnifiedTopology:true})

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', '*')
    if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', '*')
      return res.status(200).json()
    }
    next()
}) 

app.use('/admin', adminRoute)
app.use( authRoute)
app.use( cartRoute)
app.use((req,res,next)=>{
    res.status(404).json({
        msg:'not found'
    })
})

app.listen(9000);
