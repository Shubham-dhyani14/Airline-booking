const express = require('express') ;
const bodyParser = require('body-parser') ;
const app = express() ;
const {PORT} = require('./config/serverConfig'); //used .env
app.use(bodyParser.json());

const {City} = require("./models/index") ; //provided City by  db


app.listen(PORT ,  async ()=>{
    console.log(`server started at ${PORT}`);
    // making sure model is working fine
    await City.create({
        name : 'Uttrakhand',
    })
    console.log('create city ukd');
});