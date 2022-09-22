const { Router } = require("express");
const router = Router();
const passport = require('passport');

router.get("/", function(req, res) {
    res.redirect("/admin/addPunto");
});

router.post("/login", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}));

module.exports = router;