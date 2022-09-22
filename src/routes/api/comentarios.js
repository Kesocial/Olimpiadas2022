const { Router } = require("express");
const router = Router();
const Comentario = require("../../models/Comentario");
const { conectarDB, desconectarDB } = require("../../mongoDb");
conectarDB();
router.get("/", async(req, res) => {
    await Comentario.find({}).then(comentarios => {
        res.json(comentarios);;
    })
});

router.post("/add", (req, res) => {
    const { comentario, calificacion } = req.body;
    console.log(req.body);
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