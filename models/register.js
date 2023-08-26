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
  address: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  document:{
    type : Object,
    required: true,
  }
});

module.exports = mongoose.model("register", Register);
