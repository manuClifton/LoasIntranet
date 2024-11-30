
const Persona = require('../../models/PersonaModel');

exports.mostrarTodos = async (req, res) => {
    
    try {
        const personas = await Persona.find();
        //res.json({alumnos});
        console.log(personas)
        res.status(200).json(personas);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.mostrarPorFiltro = async (req, res) => {
    try {
        const filtro = req.query.filtro;
        let query = { estado: true };

        console.log('Filtro:', filtro);
        console.log('Consulta:', query);

        const personas = await Persona.find(query);
        console.log('personas encontrados:', personas);

        res.status(200).json(personas);
    } catch (error) {
        console.error("Error al obtener personas:", error);
        res.status(400).send('Hubo un error');
    }
}

exports.editarTodosImportes = async (req, res) =>{

    const updates = req.body

    try {
        const updatePromises = updates.map(async (update) => {

            console.log(update)
           // const { _id, importe} = update;

            const personas = await Persona.findById(update._id)
            if (!personas) {
              throw new Error(`personas con ID ${_id} no encontrado`)
            }
      
            if (update.importe !== undefined) {
                personas.importe = update.importe;
            }
      
            await personas.save();
          });
      
          await Promise.all(updatePromises);
      
          res.status(200).send('personas actualizados');
        
    } catch (error) {
        console.error("Error al editar importes:", error);
        res.status(400).send("Error del Servidor al editar importes:" + error);
    }
}

exports.generatePerson = async (req, res) =>{

    const newPerson = req.body

    try {
        console.log(newPerson)
        const person = await Persona.findOne({ dni: newPerson.dni })

        if (person) {
          throw new Error(`Persona con DNI ${newPerson.dni} ya existe`)
        }
      
        const nuevo = new Persona(newPerson)
        await nuevo.save();
        res.status(200).send('Persona Generada');
        
    } catch (error) {
        console.error("Error al generar Persona:", error);
        res.status(400).send({ msg: error.message });
    }
}