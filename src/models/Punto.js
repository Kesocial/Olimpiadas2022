 const { Schema, model } = require("mongoose")
 const puntoSchema = new Schema({
     orden: Number,
     descripcionDeObjeto: String,
     descripcionDeCiego: String,
     descripcionDeProblema: String,
     descripcionDeHistoria: String,

 })

 module.exports = model("Punto", puntoSchema)