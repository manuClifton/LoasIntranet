const User = require('../../models/UserModel')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const { stack } = require('../../routes/userRouter')

exports.getUsers = async (req, res) => {

    const {email, password} = req.body
    try {
        const user = await User.findOne({ email: email })

        //console.log(email, password)
        //console.log(user)

        if(user == null){
            throw new Error('Credenciales Invalidas');
        }

        if(user.password != password){
            throw new Error('Credenciales Invalidas');
        }

       // if (!bcrypt.compareSync(userBody.password, user.password)) {
       //     throw new Error('Credenciales Invalidas');
       // }
        const token  = jwt.sign({email}, "Stack", {
            expiresIn: '3m'
        })

        //console.log(token)
        res.status(200).json({jwt: token})
        //res.status(200).send(token)
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.getUser = async (req, res) => {
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