const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");


const listingController = require("../controllers/listings.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post( 
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
);


router.route("/:id")
    .get("/:id", wrapAsync(listingController.showListing))
    .put(
    "/:id", 
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing))
    .delete("/:id", 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
);

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm );


//Show Route
router.get("/:id", wrapAsync(listingController.showListing) 
);


//Edit Route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));


//Update Route  
router.put(
    "/:id", 
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
);


//Delete Route
router.delete("/:id", 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing));

module.exports = router;