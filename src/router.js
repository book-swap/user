const router = require("express").Router();
const userController = require("./controllers/user.controller");

router.get("/me", userController.findMe);

module.exports = router;
