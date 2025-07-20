//step-7 (parts given below: )--> Also remember to execute this index.js in terminal by writing node index.js for once.
const mongoose = require("mongoose");//(i)
const initData = require("./data.js");//(ii)
const Listing = require("../Models/listing.js");//(iii)

const MONGO_URL = "mongodb://127.0.0.1:27017/telegram";//i-step

main()//i-step
.then((res) => {//i-step
    console.log("Connected to DB");//i-step
})//i-step
.catch(err => //i-step
    console.log(err)//i-step
);//i-step

async function main(){//i-step
    await mongoose.connect(MONGO_URL);//i-step
}//i-step

const initDB = async () => {//(iv)
    await Listing.deleteMany({});//(iv)
    // await Listing.insertMany(initData.data);//(iv)
    // console.log("Data was Initialized");//(iv)
} 

initDB();//(iv)