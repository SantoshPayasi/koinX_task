import express from "express"
import coinDataController from "../controller/coinData.controller.js"
import asyncHandler from "../utils/asynchandler.utils.js"
import coinrequestverifierMiddleware from "../middleware/coinrequestverifier.middleware.js"

const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).send("APi is working fine")
})


router.get("/stats",
     asyncHandler(coinrequestverifierMiddleware.verifyCoinCheckRequest),
    asyncHandler(coinDataController.getupdateddata))

router.get("/deviation",
asyncHandler(coinrequestverifierMiddleware.verifyCoinCheckRequest),
asyncHandler(coinDataController.getDeviation))



export default router;