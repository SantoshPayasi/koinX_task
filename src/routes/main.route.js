import express from "express"
import coinDataController from "../controller/coinData.controller.js"
import asyncHandler from "../utils/asynchandler.utils.js"
import coinrequestverifierMiddleware from "../middleware/coinrequestverifier.middleware.js"

const router = express.Router()

router.get("/test", (request, response)=>{
    return response.status(200).json({
        message:"API routes is working file"
    })
})


router.get("/stats",
     asyncHandler(coinrequestverifierMiddleware.verifyCoinCheckRequest),
    asyncHandler(coinDataController.getupdateddata))

router.get("/deviation",
asyncHandler(coinrequestverifierMiddleware.verifyCoinCheckRequest),
asyncHandler(coinDataController.getDeviation))



export default router;