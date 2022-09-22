const { Router, response } = require("express");
const router = Router();
const Comentario = require("../../models/Comentario");
const { conectarDB, desconectarDB } = require("../../mongoDb");

router.get("/", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    conectarDB();
    await Comentario.find({}).then((comentarios) => {
        res.render("admin/comentarios", { comentarios });
    });

});
router.get("/delete/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    const { id } = req.params;
    conectarDB();
    await Comentario.deleteMany({ _id: id }).then((comentarios) => {
        res.redirect("/admin/comentarios");
    });
});
module.exports = router;