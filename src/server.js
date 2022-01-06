const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const endpoint= require('./routers/router');


// set CORS access
const cors= require('cors');
app.use(cors(
  {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
  }
))

// set JSON file 
app.use(express.json())

// Endpoint
app.use('/api', endpoint);

app.listen(port,(err)=>{
    if(!err){
        console.log('Connection success!')
    }else{
        console.log(`erro: ${err.message}`)
    }
})