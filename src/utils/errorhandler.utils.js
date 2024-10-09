import ResponseHandler from "./responseHandler.utils.js";
import statusCodeUtility from "./statuscode.utils.js";

function Errorhandler(error, request, response, next){
    const statusCode = error.statuscode || statusCodeUtility.InternalServerError;
    const message = error.message || "Internal Server Error"
return response.status(statusCode).json({
    message
});
}
export default Errorhandler