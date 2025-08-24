const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/ocean-waves-crashing-on-shore-during-sunset-N5sC8zZUgy4" ,
        set: (v) => v === ""
         ? "https://unsplash.com/photos/ocean-waves-crashing-on-shore-during-sunset-N5sC8zZUgy4" 
         : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema); 
module.exports = Listing; 