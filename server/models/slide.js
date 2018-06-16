const mongoose = require('mongoose');

const { Schema } = mongoose;

const SlideSchema = new Schema({
  imagen: String,
  titulo: String,
  descripcion: String,
});

module.exports = mongoose.model('Slide', SlideSchema);
