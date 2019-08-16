const Palestrante = require('./palestrante.model');
require('./mongo').connect();

function addPalestrante(palestrante) {
    return Palestrante.create(palestrante);
}

module.exports = { addPalestrante };