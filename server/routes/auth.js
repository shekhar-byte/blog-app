const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

//LOGIN
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    try {
      console.log("logged in");
      res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  }
);

module.exports = router;
