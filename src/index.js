const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
require("dotenv").config();
const conectarDB = require("./mongoDb");
const admin = { username: "admin", password: "1234" };
//Login
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

//Crear app
conectarDB();
const app = express();



//Configuracion
app.set("port", process.env.PORT || 8888);
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./libs/handlebars"),
});
app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");

//Middlewares
app.use(session({
    secret: 'my secret',
    resave: true,
    saveUnitializated: true
}));

app.use(passport.initialize());
app.use(passport.session());


//

passport.use(new PassportLocal(function(username, password, done) {
    if (username === admin.username && password === admin.password)
        return done(null, { id: 1, name: admin.username });

    done(null, false);
}))

passport.serializeUser(function(user, done) {
    done(null, user.id);
})

passport.deserializeUser(function(id, done) {
    done(null, { id: 1, name: admin.password });
})

//Rutas
app.use(require("./routes"));

app.use("/admin/panel", require("./routes/admin/panel"));
app.use("/admin/login", require("./routes/admin/login"));
app.use("/admin/logout", require("./routes/admin/logout"));
app.use("/admin/addTematica", require("./routes/admin/addTematica"));
app.use("/admin/addPunto", require("./routes/admin/addPunto"));
app.use("/api/comentarios", require("./routes/api/comentarios"));
app.use("/api/tematicas", require("./routes/api/tematicas"));
app.use("/api/puntos", require("./routes/api/puntos"));
app.use(require("./routes"));

//Carpeta public    
app.use(express.static(path.join(__dirname, "public")));


//Conexion
app.listen(app.get("port"), () =>
    console.log("Server running on port ", app.get("port"))
);