const User = require("../models/user.model");
const { sanitizeUser } = require("../helpers/user.helper");

// Retrieve my user
exports.findMe = (req, res) => {
  res.json(req.user);
};

exports.updateMe = (req, res) => {
  User.findByIdAndUpdate(
    req.user.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      county: req.body.county,
      city: req.body.city
    },
    { new: true }
  )
    .then(user => {
      if (!user) res.status(404).json({ message: "Not found" });
      else res.json(sanitizeUser(user));
    })
    .catch(error => {
      res.json({ message: "An error occured" });
      console.log(error);
    });
};

exports.deleteMe = (req, res) => {
  User.findOneAndDelete({ _id: req.user.id })
    .then(user => {
      if (!user) res.status(404).json({ message: "Not found" });
      else res.json(sanitizeUser(user));
    })
    .catch(error => {
      res.json({ message: "An error occured" });
      console.log(error);
    });
};

exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) res.status(404).json({ message: "Not found" });
      else res.json(sanitizeUser(user));
    })
    .catch(error => {
      res.json({ message: "An error occured" });
      console.log(error);
    });
};
