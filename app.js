//Install -> four packages installation which are: init, express, ejs, mongoose.
const express = require("express");//Step1
const app = express();//Step1
const mongoose = require("mongoose");//Step4(i)

const MONGO_URL =  "mongodb://127.0.0.1:27017/Practice3";//Step4(ii)

main()
.then((res) => {
    console.log("Connected to db");//Step4(iv)
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect(MONGO_URL);//Step4(iii)
}

app.get("/", (req, res)=> {
    res.send("Root is working");//Step3
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");//Step2
});