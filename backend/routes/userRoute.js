const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUser,
  updatePhoto,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/getLoginStatus", getLoginStatus);

router.patch("/updateUser", protect, updateUser);
router.patch("/updatePhoto", protect, updatePhoto);

module.exports = router;
