// Retrieve my user
exports.findMe = (req, res) => {
  res.send(req.user);
};
