const { Router } = require("express");
const router = Router();
const Punto = require("../../models/Punto");
const { conectarDB, desconectarDB } = require("../../mongoDb");
let maxOrden = [];
maxOrden.length = 60;
maxOrden.fill(1);
maxOrden = maxOrden.map((e, index) => e = index)

router.get("/", async(req, res) => {
    if (!req.isAuthenticated()) res.render("admin/login");
    conectarDB();
    await Punto.find({}).then((puntos) => {
        res.render("admin/puntos", { puntos, maxOrden });
    });

});
router.post("/add", async(req, res) => {
    const { nombre, orden, descripcionDeObjeto, descripcionDeCiego, descripcionDeProblema, descripcionDeHistoria } = req.body;
    console.log(req.body);
    // const puntoOrden = await Punto.findOne({ orden }).exec();
    // if(!puntoOrden) res.redirect();
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
        })
        .catch((err) => {
            console.error(err);
        });
    res.redirect("/admin/puntos");
});

router.get("/delete/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login");
    conectarDB();
    const { id } = req.params;
    await Punto.deleteMany({ _id: id }).then((puntos) => {
        res.redirect("/admin/puntos");
    });
});
router.get("/edit/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login");
    conectarDB();
    const { id } = req.params;
    await Punto.find({ _id: id }).then((puntoArray) => {
        const punto = puntoArray[0];
        punto.id = id;
        res.render("admin/puntosEdit", { punto });
    });
});
router.post("/edit/:id", async(req, res) => {
    if (!req.isAuthenticated()) res.redirect("/admin/login");
    const { id } = req.params;
    const {
        nombre,
        orden,
        descripcionDeObjeto,
        descripcionDeCiego,
        descripcionDeProblema,
        descripcionDeHistoria,
    } = req.body;
    conectarDB();
    await Punto.findOneAndUpdate({ _id: id }, {
        nombre,
        orden,
        descripcionDeObjeto,
        descripcionDeCiego,
        descripcionDeProblema,
        descripcionDeHistoria,
    }).then((e) => {
        res.redirect("/admin/puntos");
    });
});
module.exports = router;