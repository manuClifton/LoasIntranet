
const Entidad = require('../../models/EntidadModel');

exports.mostrarTodos = async (req, res) => {
    
    try {
        const entidad = await Entidad.find();
        //res.json({alumnos});
        //console.log(alumnos)
        res.json(entidad)
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}