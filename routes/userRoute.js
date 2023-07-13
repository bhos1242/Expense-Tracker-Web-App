const express = require("express");
const {
  loginController,
  resisterController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
//POST || LOGIN
router.post("/login", loginController);

//POST ||RESISTER
router.post("/resister", resisterController);
module.exports = router;
