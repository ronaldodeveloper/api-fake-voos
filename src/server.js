const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const endpoint= require('./routers/router')

// set JSON file 
app.use(express.json())

// Endpoint
app.use('/', endpoint);

app.listen(port,(err)=>{
    if(!err){
        console.log('Connection success!')
    }else{
        throw err
    }
})