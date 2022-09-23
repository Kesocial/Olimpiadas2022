const { Router } = require("express");
const router = Router();
const Tematica = require("../../models/Tematica");
const { conectarDB, desconectarDB } = require("../../mongoDb");

router.get("/", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    conectarDB();

    await Tematica.find({}).then(tematicas => {
        res.render("admin/tematicas", { tematicas });
    })

});
router.get("/delete/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    conectarDB();
    const { id } = req.params;
    await Tematica.deleteMany({ _id: id }).then(tematica => {
        res.redirect("/admin/tematicas");
    })
});
router.get("/edit/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    conectarDB();
    const { id } = req.params;
    await Tematica.find({ _id: id }).then(tematicaArray => {
        const tematica = tematicaArray[0];
        tematica.id = id;
        res.render("admin/tematicasEdit", { tematica });
    })
});
router.post("/edit/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    const { id } = req.params;
    const { titulo, descripcion, dataImg } = req.body;
    const fechaDeSubida = new Date();
    conectarDB();
    await Tematica.findOneAndUpdate({ _id: id }, { titulo, descripcion, fechaDeSubida, dataImg: dataImg[1] }).then(e => {
        res.redirect("/admin/tematicas");
    })
});

router.post("/add", (req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login")
    const { titulo, descripcion, fechaDeSubida, dataImg } = req.body;
    console.log(req.body);
    const newTematica = new Tematica({
        titulo,
        descripcion,
        dataImg: dataImg[1],
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
    res.redirect("/admin/tematicas");
});

module.exports = router;