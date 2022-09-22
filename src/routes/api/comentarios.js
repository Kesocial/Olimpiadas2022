const { Router } = require("express");
const router = Router();
const Comentario = require("../../models/Comentario");
const conectarDB = require("../../mongoDb");
router.get("/", async(req, res) => {
    conectarDB();
    await Comentario.find({}).then(comentarios => {
        res.json(comentarios);
    })
});

router.post("/add", (req, res) => {
    const { comentario, calificacion } = req.body;
    console.log(req.body);
    conectarDB();
    const newComentario = new Comentario({
        comentario,
        fecha: new Date(),
        calificacion
    });
    newComentario
        .save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });

    res.redirect("/admin/panel");
});

// post comentario
module.exports = router;