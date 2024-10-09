import express, { urlencoded } from "express";
import cors from "cors";
import { corsOptions } from "./constants.js";
// import Errorhandler from "./utils/APIErrorHandler.js";
import MainRoute from "./routes/main.route.js"
import backgroundTask from "./services/cronServices/fetchData.service.js";
import Errorhandler from "./utils/errorhandler.utils.js";

const app = express()


app.use(express.json({limit:"16kb"}))
app.use(urlencoded({extended:true}))
app.use(cors(corsOptions))

//Authorization Middlewares

// app.use("/api/v1/admin", adminValidation)
// app.use("/api/v1/user", userValidation)

// Api Route

app.use("/", MainRoute)


app.use(Errorhandler)
// for middleware error handling
// app.use(Errorhandler)

backgroundTask.start()

export {app}