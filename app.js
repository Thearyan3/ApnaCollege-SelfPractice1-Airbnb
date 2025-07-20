//Install -> four packages installation which are: init, express, ejs, mongoose.
const express = require("express");//Step1
const app = express();//Step1
const mongoose = require("mongoose");//Step4(i)
const Listing = require("./Models/listing.js");//Step5


app.get("/", (req, res)=> {
    res.send("Root is working");//Step3
});

const MONGO_URL =  "mongodb://127.0.0.1:27017/Practice3";//Step4(ii)
main()
.then((res) => {
    console.log("Connected to db");//Step4(iv)
})
.catch(err => console.log(err));
async function main(){
    await mongoose.connect(MONGO_URL);//Step4(iii)
}

//Test Route (step6)
// app.get("/testlistings",async (req, res)=> {
//     let sampleListing = new Listing({
//         title: "Foodie World",
//         description: "Tastes better than the thoughts",//Step6
//         price: 570,
//         location: "Manhattan, California",
//         country: "United States of America"
//     });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Sample was tested");
// });


app.listen(8080, () => {
    console.log("Server is listening to port 8080");//Step2
});