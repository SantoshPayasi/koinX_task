import { selectedFields } from "../constants.js";
import coinModels from "../models/coin.models.js";
import APIError from "../utils/error.utils.js";
import ResponseHandler from "../utils/responseHandler.utils.js";
import statusCodeUtility from "../utils/statuscode.utils.js";



class coinController {

    async getupdateddata(request, response, next){
          const {coin} = request.query
          const data = await coinModels.findOne({Type:coin, isActive:true}, selectedFields).lean()
          if(!data){
            throw new APIError(statusCodeUtility.NotFound, "data not found")
          }
          return ResponseHandler(statusCodeUtility.Success, data, response)
    }


    async getDeviation(request, response, next){
            const {coin} = request.query
            const data = await coinModels.find({isActive:false, Type:coin}, {...selectedFields, marketCap:0, "24hChange":0}).sort({createdAt:-1}).limit(100).lean()
            if(!data){
                throw new APIError(statusCodeUtility.NotFound, "data not found")
            }

            const dataToCalculate = data.map(data=> data.price)
            const Deviation = await calculateDeviation(dataToCalculate)
            return ResponseHandler(statusCodeUtility.Success, {deviation: Deviation}, response)
       
    }

   
    
}

async function calculateDeviation(pricelist){
    const mean = pricelist.reduce((acc, price)=>acc+price, 0) /pricelist.length;
    const verience = pricelist.reduce((acc, price)=> acc + Math.pow(price - mean, 2), 0) / pricelist.length
    return Math.sqrt(verience)
}


export default new coinController()