const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cuentaSchema = new Schema({
  cuenta: { type: String, required: true },
  codigo: { type: String, required: true }
});

const cuentasSchema = new Schema({
  haberes: { type: cuentaSchema, required: true },
  recaudadora: { type: cuentaSchema, required: true }
});

const entidadSchema = new Schema(
    {
        nombre: String,
        constante: String,
        cuit: String,
        cod_empresa: String,
        cod_servicio: String,
        sucursal_debito: String,
        cod_concepto: String,
        cuentas:  cuentasSchema, 
        estado: Boolean

    },
    {versionKey:false}
)

module.exports = mongoose.model('entities', entidadSchema)