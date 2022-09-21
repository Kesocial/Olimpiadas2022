const { Router } = require("express");
const router = Router();
const Punto = require("../models/Punto");
const request = require('request');


router.get("/", function(req, res) {
    let logueado = false;
    if (req.isAuthenticated()) logueado = true;
    request.get(`httpS://olimpiadas2022eestn5.herokuapp.com/api/tematicas`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        tematicas = body;
        
     res.render("landing/landing", {tematicas, logueado });
       });
    
});

module.exports = router;
