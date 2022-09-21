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
// post comentario
module.exports = router;