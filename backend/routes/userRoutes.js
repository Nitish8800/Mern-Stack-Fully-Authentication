const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");
const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
