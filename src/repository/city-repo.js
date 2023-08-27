const city = require('../models/city');
const {City} = require('../models/index') ;


class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name}) ;
            return city;
        }
        catch(error)
        {
            throw {error};
        }
    }

    async deleteCity(cityID){
        try{
            await City.destroy({
                where:{
                    id:cityID
                }
            });
        }
        catch(error)
        {
            throw {error} ;
        }
    }

    async updateCity(cityId , data)
    {
        try{
            const cityId = await City.update(data , {
                where: {
                    id : cityId
                }
            })
            return city ;
        }
        catch(error)
        {
            throw {error} ;
        }
    }
    async getCity(cityId)
    {
        try{
            const cityId = await City.findByPk(cityId) ;
            return city ;
        }
        catch(error)
        {
            throw {error} ;
        }
    }
}

module.exports = CityRepository ;