const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    enum: ['activo', 'pendiente', 'suspendido'],
    default: 'pendiente',
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
})


module.exports = mongoose.model('User', UserSchema)

