import cron from "node-cron"
import fetch from "node-fetch"
import {envProvider} from "../../constants.js"
import coinModels from "../models/coin.models.js";

const backgroundTask =  cron.schedule('*/30 * * * * *', async () => {
      try {
            console.log(envProvider.API_KEY)
            const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=USD&include_market_cap=true&include_24hr_change=true';
            const options = {
              method: 'GET',
              headers: {accept: 'application/json', "x-cg-api-key": envProvider.API_KEY}
            };

            const coinData = await fetch(url, options)
            console.log(coinData.status)
            if(!coinData || !coinData.status===200){
              console.log("unable to fetch data")
            }
            const workingData = await coinData.json()

        
            const dataToPut = Object.entries(workingData).reduce((acc, [key, value])=>{
              const data = {
              Type:key,
              price:  value.usd,
              marketCap:value.usd_market_cap,
              "24hChange":value.usd_24h_change,
              isActive:true
              }
              acc.push(data)
              return acc
            },[])

            console.log(dataToPut)
          
          const inactivePreviousdata = await coinModels.updateMany({isActive:false})
          if(inactivePreviousdata){
            console.log("status updated")
          }
          const documentsInsterted = await coinModels.insertMany(dataToPut)
          console.log("Documents inserted", documentsInsterted.length)
    }
    catch(error){
       console.log(error)
    }
  }
);


export default backgroundTask