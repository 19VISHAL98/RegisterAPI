// const { array } = require("joi");
const mongoose = require("mongoose");

const Register = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  currentAddress:{
    type:String,
    required:true,
  },
  currentDistrict:{
    type:String,
    required:true,
  },
  permanentAddress:{
    type:String,
    // required:true,
  },
  permanentDistrict:{
    type:String,
    // required:true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  documents:{
    type : Object,
    required: true,
  }
});

module.exports = mongoose.model("register", Register);
