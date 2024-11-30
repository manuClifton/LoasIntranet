const _ = require('lodash')
const Joi = require('joi')
const errors = require('../errors/errors')

module.exports = async (credentials)=>{
    if(_.isEmpty(credentials)){
        throw new errors.BadRequest('No se han ingresado datos')
    }
    try {
        const value = await schema.validateAsync(credentials)
    } catch (error) {
        throw new errors.BadRequest('No cumple con los requisitos')
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
