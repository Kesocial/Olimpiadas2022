const { Router } = require("express");
const router = Router();
const Punto = require("../../models/Punto");
const conectarDB = require("../../mongoDb");
router.get("/", function(req, res) {
    const orden = req.query.orden
    conectarDB();
    
    Punto.find({ orden: orden }).then(punto => {
        res.json(punto[0]);
        console.log(punto[0]);
    })
    
});
router.post("/add", (req, res) => {
    const { orden, descripcionDeObjeto, descripcionDeCiego,descripcionDeProblema,descripcionDeHistoria } = req.body;
    console.log(req.body);
    conectarDB();
    const newPunto = new Punto({
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
        })
        .catch((err) => {
            console.error(err);
        });

    res.redirect("/admin/panel");
});

module.exports = router;