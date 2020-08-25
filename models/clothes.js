var mongoose = require("mongoose");


var ProductSchema = new mongoose.Schema({
    name: String,
    brand:String,
    price:String,
    image: String,
    size:String,
    description: String,
    qty:Number
 })  ; 

 module.exports=mongoose.model("Product",ProductSchema);