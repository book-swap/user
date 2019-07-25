const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  county: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model("User", UserSchema);
