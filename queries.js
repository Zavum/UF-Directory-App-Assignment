/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    config = require('./config.js'),
    Listing = require('./ListingSchema.js');

mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: 'Library West'}, function(err,data){
    if(err) throw(err);

      console.log("Library Data: " + data);
   });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({code: 'CABL'},function(err,data){
    if(err) throw(err);
    
   });
   Listing.find({},function(err,data){
    if(err) throw err;

    console.log("Removed List: " + data);
   });

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.find({code:'PHL'},function(err,data){
      data.longitude = -82.348799;
      data.latitude = 29.644592;
      data.address = '100 Phelps Laboratory Gainesville, FL 32611'
      if(err) throw(err);
      console.log("Updated Info: " + data);
    })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, data){
    if(err) throw err;
    console.log("Final Listing: " + data);
   })
};

findLibraryWest();

removeCable();

updatePhelpsMemorial();

retrieveAllListings();
