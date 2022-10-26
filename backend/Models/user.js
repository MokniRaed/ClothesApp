const mongoose = require("mongoose");
//Create User schéma and the role
const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    default:"admin"
  }
});

module.exports = mongoose.model("user",userSchema)