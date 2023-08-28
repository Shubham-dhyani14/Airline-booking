const { response } = require('express');
const {CityService} = require('../services/index') ;
const { CityRepository } = require('../repository');

const cityService = new CityService() ;
const create = async(req, res)=>{
    try{
        const city = await cityService.createCity(req.body) ;
        return res.status(201).json({
            data: city , 
            success: true , 
            message: 'created city ' , 
            err : {}
        })
    }
    catch(error){
        // console.log(error)
        return res.status(500).json({
            data: {} , 
            success: false , 
            message: 'cant created city ' , 
            err : error
        })
    }
}
const destroy = async(req, res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id) ;
        return res.status(201).json({
            data: response , 
            success: true , 
            message: 'deleted city ' , 
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data: {} , 
            success: false , 
            message: 'cant delete city ' , 
            err : error
        })
    }
}
const get = (req, res)=>{
    try{
        const response = cityService.getCity(req.params.id) ;
        return res.status(201).json({
            data: response , 
            success: true , 
            message: 'fetched city ' , 
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data: {} , 
            success: false , 
            message: 'cant fetch city ' , 
            err : error   , 
        })
    }
}
const update = async (req , res)=>{
    try{
        
        const response  =  await cityService.updateCity(req.params.id , req.body)
        return res.status(201).json({
            data: response , 
            success: true , 
            message: 'updated city ' , 
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data: {} , 
            success: false , 
            message: 'cant update city ' , 
            err : error   , 
        })
    }
    

}