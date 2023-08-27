const {CityRepository} = require('../repository/index')

class CityService{
    constructor(){
        this.cityRepository = new CityRepository() ;
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data) ;
            return city;
        }
        catch(error)
        {
            console.log('error in city-service');
            throw {error};
        }
    }
    async deleteCity(cityID){
        try{
            const response = await this.cityRepository.deleteCity(cityID) ;
            return response;
        }
        catch(error)
        {
            console.log('error in city-service');
            throw {error};
        }
    }

}