const { Router } = require("express");
const router = Router();
const { conectarDB, desconectarDB } = require("../../mongoDb");
const Tematica = require("../../models/Tematica");
conectarDB();
router.get("/", (req, res) => {
    Tematica.find({})
        .exec()
        .then((tematicas) => {
            res.json(tematicas);
        });
});
router.get("/:cantidad", (req, res) => {
    const cantidad = req.params.cantidad;

    Tematica.find({})
        .limit(cantidad)
        .exec()
        .then((comentarios) => {
            res.json(comentarios);
        });
});

module.exports = router;