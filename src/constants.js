import dotenv from  "dotenv"

import path from "path"
import { fileURLToPath } from "url";

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path:path.resolve(__dirname, "../.env")
})

// ----------------------------------- Initilization of .env file -------------------------------------------

export const corsOptions = {
    "origin":"*",
    "credentials":true,
    "optionsSuccessStatus":200,
    "methods": ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    "allowedHeaders":['Content-Type', 'Authorization','withCredentials'],
    // "Access-Control-Allow-Credentials": true
}

export const envProvider = {
     PORT : process.env.PORT,
     API_KEY : process.env.RESOURCES_API_KEY,
     DB_URI: process.env.DB_URI,
}

export const selectedFields =  {__v:0, _id:0, isActive:0, createdAt:0, updatedAt:0, Type:0}

export const coinType = ["bitcoin", "matic-network", "ethereum"]