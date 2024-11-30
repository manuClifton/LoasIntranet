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
    nombre: Joi.string(1).min().max(20).required(),
    constante: Joi.string().min(1).max(1).required(),
    cuit: Joi.string(11).min().max(11).required(),
    cod_empresa: Joi.string().min(3).max(3).required(),
    cod_servicio: Joi.string().min(3).max(3).required(),
    sucursal_debito: Joi.string().min(3).max(3).required(),
    cod_concepto: Joi.string().min(1).max(1).required(),
})
