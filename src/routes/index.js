const { Router } = require("express");
const router = Router();
const { conectarDB, desconectarDB } = require("../mongoDb");
const Tematica = require("../models/Tematica");

router.get("/", async(req, res) => {
    let logueado = false;
    if (req.isAuthenticated()) logueado = true;
    await Tematica.find({})
        .exec()
        .then((tematicas) => {
            res.render("landing/landing", { tematicas, logueado });
        });
});

module.exports = router;