import statusCodeUtility from "./statuscode.utils.js"


const ResponseHandler = (statusCode=statusCodeUtility.Success, data=null, response)=>{
    return response.status(statusCode).send({
        ...data
    });
}

export default ResponseHandler