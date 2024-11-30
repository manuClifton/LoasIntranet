const mongoose = require('mongoose')
const Schema = mongoose.Schema

const importeSchema = new Schema({
    haberes: Number,
    premio_insentivo: Number,
    caduco: Number,
    hora_extra: Number,
    embargo_judicial: Number
  });


const empleadoSchema = new Schema(
    {
        constante: String,
        sucursal: String,
        cod_concepto: String,
        cuenta: String,
        digito_cuenta: String,
        nombre: String,
        apellido: String,
        dni: String,
        estado: Boolean,
        embargo: Boolean,
        importe: importeSchema, //  de objetos importeSchema
    },
    {versionKey:false}
)

module.exports = mongoose.model('empleados', empleadoSchema)