const { Router } = require("express");
const router = Router();
const request = require("request");
router.get("/", function(req, res) {
    let logueado = false;
    if (req.isAuthenticated()) logueado = true;
    request.get(`http://${process.env.DOMAIN}:${process.env.PORT}/api/tematicas`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        comentarios = body;
        res.render("admin/comentarios", { comentarios });
    });
    res.redirect("admin/login");
});
module.exports = router;