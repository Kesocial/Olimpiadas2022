const { Router } = require("express");
const router = Router();
const passport = require('passport');

router.get("/", function(req, res) {
    if (!req.isAuthenticated()) res.render("admin/login")
    res.render("admin/panel");
});

router.post("/login", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}));

module.exports = router;