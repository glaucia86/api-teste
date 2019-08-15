const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const palestranteSchema = new Schema({
  nomePalestrante: { type: String, required: true, max: 80 },
  tituloPalestra: { type: String, required: true, max: 80 },
}, {
  timestamps: true,
  collection: 'palestrante',
});

module.exports = mongoose.model('Palestrante', palestranteSchema);