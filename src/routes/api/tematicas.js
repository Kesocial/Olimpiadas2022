const { Router } = require("express");
const mongoose = require("mongoose");
const router = Router();
const conectarDB = require("../../mongoDb");
const Tematica = require("../../models/Tematica");
router.get("/", (req, res) => {
    conectarDB();
    Tematica.find({})
        .exec()
        .then((comentarios) => {
            res.json(comentarios);
        });
});
router.get("/:cantidad", (req, res) => {
    conectarDB();
    const cantidad = req.params.cantidad;

    Tematica.find({})
        .limit(cantidad)
        .exec()
        .then((comentarios) => {
            res.json(comentarios);
        });
});
router.post("/add", (req, res) => {
    const { titulo, descripcion, fechaDeSubida, dataImg } = req.body;
    console.log(req.body);
    conectarDB();
    const newTematica = new Tematica({
        titulo,
        descripcion,
        dataImg,
        fechaDeSubida,
    });
    newTematica
        .save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });

    res.send("recibido");
});
module.exports = router;