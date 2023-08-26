const express = require('express') ;
const bodyParser = require('body-parser') ;
const app = express() ;
const {PORT} = require('./config/serverConfig'); //used .env
app.use(bodyParser.json());


app.listen(PORT , ()=>{console.log(`server started at ${PORT}`)});