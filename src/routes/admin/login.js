const { Router } = require("express");
const router = Router();
const passport = require('passport');


router.get("/", (req, res) => {
    if (!req.isAuthenticated()) res.render("admin/login")
    else res.header(200).redirect("/admin/panel");
});

router.post("/", passport.authenticate('local', {
    successRedirect: "/admin/panel",
    failureRedirect: "/admin/login"
}));

module.exports = router;