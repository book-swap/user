const router = require("express").Router();
const userController = require("./controllers/user.controller");

router.get("/me", userController.findMe);
router.patch("/me", userController.updateMe);
router.delete("/me", userController.deleteMe);
router.get("/:userId", userController.findOne);

module.exports = router;
