import {app} from "./src/app.js"
import { envProvider } from "./src/constants.js";
import connectDB from "./src/db/database.js"
import "./src/services/cronServices/fetchData.service.js"
connectDB().then(()=>{
    app.listen(envProvider.PORT, ()=>{
        console.log(`server is running at port ${envProvider.PORT}`)
    })
})

