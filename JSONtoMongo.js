'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
    data = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for (var i=0; i < data.entries.length;i++){
  var entry = data.entries[i];
  
  var newListing;
  if(entry.hasOwnProperty('coordinates')){
    console.log(entry.code);
  newListing = new Listing({

    code: entry.code,
    name: entry.name,
    address: entry.address,

    coordinates:{latitude: entry.coordinates.latitude, longitude: entry.coordinates.longitude}
    });

  }else{
    newListing = new Listing({
      code: entry.code,
      name: entry.name,
      address: entry.address,
      longitude: null,
      latitude: null
    });
  }
  newListing.save(function(err){
    if(err) throw err;
  })
}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */