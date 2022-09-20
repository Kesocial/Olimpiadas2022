const { Router } = require("express");
const router = Router();
const Comentario = require("../../models/Comentario");
const conectarDB = require("../../mongoDb");
router.get("/", function(req, res) {
    conectarDB();
    Comentario.find({}).then(comentarios => {
        res.json(comentarios);
    })
});
// post comentario
module.exports = router;