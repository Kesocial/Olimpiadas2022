const { Router } = require("express");
const router = Router();
const passport = require('passport');


router.get("/", (req,res,next)=>{
    if(req.isAuthenticated()) return next();
    res.render("admin/login");
},(req,res)=>{    
    res.render("admin/addTematica");
});

router.post("/", passport.authenticate('local',{
    successRedirect: "/",
    failureRedirect: "/admin/login"
}));

module.exports = router;
