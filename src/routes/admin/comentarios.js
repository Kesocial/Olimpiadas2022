const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
    if(req.isAuthenticated()) logueado = true; 
    request.get(`http://${process.env.DOMAIN}:${process.env.PORT}/api/tematicas`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        tematicas = body;
        let logueado = false; 
        res.render("admin/comentarios", { comentarios });
    });
});
module.exports = router;
