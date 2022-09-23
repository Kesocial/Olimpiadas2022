const { Router } = require("express");
const router = Router();
const Punto = require("../../models/Punto");
const { conectarDB, desconectarDB } = require("../../mongoDb");
router.get("/", function(req, res) {
    conectarDB();
    const orden = req.query.orden
    Punto.find({ orden: orden }).then(punto => {
        res.json(punto[0]);
        console.log(punto[0]);
    })

});
router.post("/add", (req, res) => {
    conectarDB();
    console.log(req.body);
    const newPunto = new Punto({
        nombre,
        orden,
        descripcionDeObjeto,
        descripcionDeCiego,
        descripcionDeProblema,
        descripcionDeHistoria,
    });
    newPunto
        .save()
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;