 


const { Router } = require("express");
const router = Router();
const passport = require('passport');


router.post('/', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

module.exports = router;
