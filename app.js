//Install -> four packages installation which are: init, express, ejs, mongoose for basic structure.
//Install -> ejsMate for basic styling.
const express = require("express");//Step1
const app = express();//Step1
const mongoose = require("mongoose");//Step4(i)
const Listing = require("./Models/listing.js");//Step5
const path = require("path");//Step9
const methodOverride = require("method-override");//Step-14(i)
const ejsMate = require("ejs-mate");//Step17(i)

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
app.set("views", path.join(__dirname, "views"));//step9(iii)
app.use(express.urlencoded({extended: true}));//step10(ii)
app.use(methodOverride("_method"));//step14(ii)
app.engine("ejs", "ejsMate");//Step17(ii)

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

//Index Route (Step8)-create index.ejs with this.
//Also connected with (step11)-create button for new listing before new route.
app.get("/listings", async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

//New Route (Step11)-Must create before show route otherwise the server will confuse /new with /:id
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

//Show Route (Step10(i))- create show.ejs with this
app.get("/listings/:id", async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

//Create Route (step12)- directly connected with new route. Created after new.ejs
app.post("/listings", async(req, res) => {
    //let{title, description, image, price, location, country} = req.body; (I-method)
    let aryan = new Listing(req.body.listing);//(II-method)
    await aryan.save();
    res.redirect("/listings");
});

//Edit Route (step13)- first create anchor tag inside show.ejs then this route.
//This route's file (edit.ejs) will update the existing data, so it will require method-override package. So next step is 14. 
app.get("/listings/:id/edit", async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

//Update Route (Step15)
app.put("/listings/:id", async(req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route (step16)
app.delete("/listings/:id", async(req, res) => {
    let {id} = req.params;
    const aryan = await Listing.findByIdAndDelete(id);
    console.log(aryan);
    res.redirect("/listings");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");//Step2
});