require('dotenv').config() ;

//warn add () after config

//clean-code : instead of using process.env.PORT in sever its better to export env 
// from the preffered config file as serverConfig in this case

console.log(process.env.PORT);
module.exports = {
    PORT : process.env.PORT ,
}