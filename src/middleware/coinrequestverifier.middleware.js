import { coinType } from "../constants.js"
import APIError from "../utils/error.utils.js"
import statusCodeUtility from "../utils/statuscode.utils.js"

class verifyCoinRequests{
    async verifyCoinCheckRequest(request, response, next){
        const {coin} = request.query
        if(!coin || typeof coin !== "string" || !coinType.includes(coin)){
            throw new APIError(statusCodeUtility.BadRequest, "Invalid coin data")
        }
         next()
    }
}


export default new verifyCoinRequests()