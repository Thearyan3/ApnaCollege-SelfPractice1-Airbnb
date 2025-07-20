//Install -> four packages installation which are: init, express, ejs, mongoose.
const express = require("express");//Step1
const app = express();//Step1
const mongoose = require("mongoose");//Step4(i)
const Listing = require("./Models/listing.js");//Step5
const path = require("path");//Step9


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

app.set("views engine", "ejs");//step9(ii)
app.set("views", path.join(__dirname, "views"));//step(iii)

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

//Index Route (Step8)
app.get("/listings", async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

//Show Route (Step10)
app.get("/listings/:id", async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");//Step2
});