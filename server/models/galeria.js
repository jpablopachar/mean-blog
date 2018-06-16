const mongoose = require('mongoose');

const { Schema } = mongoose;

const GaleriaSchema = new Schema({
  foto: String,
});

module.exports = mongoose.model('Galeria', GaleriaSchema);
