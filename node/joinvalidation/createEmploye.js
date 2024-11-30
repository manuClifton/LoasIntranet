const Joi = require('joi')
const errors = require('../errors/errors')

module.exports = async (datos)=>{
    try {
        const value = await schema.validateAsync(datos)
    } catch (error) {
        throw new errors.IncompleteData('Faltan Datos')
    }
}

const schema = Joi.object({
    constante: Joi.string().min(1).max(1).required(),
    sucursal: Joi.string().min().max(3).required(),
    cod_concepto: Joi.string().min(1).max(1).required(),
    cuenta: Joi.string().min(7).max(7).required(),
    digito_cuenta: Joi.string(),
    apellido: Joi.string(1).min().max(15).required(),
    nombre: Joi.string(1).min().max(15).required(),
    dni: Joi.string(1).min().max(9).required(),
})
