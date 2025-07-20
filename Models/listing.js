//Step5
const mongoose = require("mongoose");//(i)
const Schema = mongoose.Schema;//(ii)

const listingSchema = new Schema({//(iii)
    title:{
        type: String,
        required: true,
    },
    description: String,
    image: {
         type: String,
         default: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) => {
      // Handle object input
      if (typeof v === "object" && v.url) {
        return v.url;
      }
      // Handle empty string input
      if (v === "") {
        return "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      }
      // Otherwise use value as-is
      return v;
    }
    },
    price: Number, 
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);//(iv)
module.exports = Listing;//(v)