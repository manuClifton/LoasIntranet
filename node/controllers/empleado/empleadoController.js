
const Empleado = require('../../models/EmpleadoModel');

exports.getEmployes = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        //res.json({empleados});
        //console.log(empleados)
        res.status(200).json(empleados)
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.getEploye = async (req, res) => {
    try {
        console.log(req.params.id)
        const empleado = await Empleado.findById(req.params.id)
        console.log(empleado)
        res.status(200).json(empleado);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.mostrarPorFiltro = async (req, res) => {
    try {
        const filtro = req.query.filtro;
        let query = { estado: true };
        /*
        if (filtro === 'embargo_judicial') {
            query.embargo = true;
        } */

        console.log('Filtro:', filtro);
        console.log('Consulta:', query);

        //const empleados = await Empleado.find(query);
        const empleados = await Empleado.find();
        console.log('Empleados encontrados:', empleados);

        res.status(200).json(empleados);
    } catch (error) {
        console.error("Error al obtener empleados:", error);
        res.status(400).send('Hubo un error');
    }
}

exports.editAllImports = async (req, res) =>{
    const updates = req.body
    try {
        const updatePromises = updates.map(async (update) => {
            //console.log(update)
            const empleado = await Empleado.findById(update._id)
            if (!empleado) {
              throw new Error(`Empleado con ID ${update._id} no encontrado`)
            }
            if (update.importe !== undefined) {
              empleado.importe = update.importe;
            }
            await empleado.save();
          });
          await Promise.all(updatePromises);
          res.status(200).send('Empleados actualizados');
    } catch (error) {
        console.error("Error al editar importes:", error);
        res.status(400).send("Error del Servidor al editar importes:" + error);
    }
}


exports.editOndeEmployeById = async (req, res) =>{
    const id = req.params.id
    const employeUpdate = req.body
    try {
            const empleado = await Empleado.findById(id)
            if (!empleado) {
              throw new Error(`Empleado con ID ${update._id} no encontrado`)
            }
            //console.error("Error al editar importes:", employeUpdate);
              empleado.dni = employeUpdate.dni
              empleado.nombre = employeUpdate.nombre
              empleado.apellido = employeUpdate.apellido
              empleado.cuenta = employeUpdate.cuenta
              empleado.digito_cuenta = employeUpdate.digito_cuenta
              empleado.sucursal = employeUpdate.sucursal
              empleado.cod_concepto = employeUpdate.cod_concepto
              empleado.constante = employeUpdate.constante
            
            await empleado.save();

          res.status(200).send('Empleado Modificado: '+ employeUpdate);
    } catch (error) {
        console.error("Error al editar importes:", error);
        res.status(400).send("Error del Servidor al editar:" + error);
    }
}
exports.toggleEmployeStateById = async (req, res) => {
    const id = req.params.id;
    console.error("ID:", id);
    try {
        // Buscar empleado por ID
        const empleado = await Empleado.findById(id);

        // Verificar si el empleado existe
        if (!empleado) {
            return res.status(404).send(`Empleado con ID ${id} no encontrado`);
        }
       
        // Alternar el estado del empleado
        empleado.estado = !empleado.estado;

        // Guardar los cambios
        await empleado.save();

        res.status(200).send(`Empleado ${empleado.estado ? 'activado' : 'desactivado'} con éxito`);
    } catch (error) {
        console.error("Error al cambiar el estado del empleado:", error);
        res.status(400).send("Error del Servidor al cambiar el estado:" + error);
    }
}


exports.generateEmploye = async (req, res) =>{

    const newEmploye = req.body

    try {
        console.log(newEmploye)
        const empleado = await Empleado.findOne({ dni: newEmploye.dni })

        if (empleado) {
          throw new Error(`Empleado con DNI ${newEmploye.dni} ya existe`)
        }
      
        const nuevo = new Empleado(newEmploye)
        await nuevo.save();
        res.status(200).send('Empleado Generado');
        
    } catch (error) {
        console.error("Error al generar Empleado:", error);
        res.status(400).send({ msg: error.message });
    }
}