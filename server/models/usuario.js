const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  usuario: String,
  contrasena: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
