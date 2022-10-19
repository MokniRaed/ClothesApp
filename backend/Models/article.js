const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
  categorie:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  color:String,
  price:Number,
  size:Number,
  quantity:Number,
  images:[String]
});

module.exports = mongoose.model("article", articleSchema);
