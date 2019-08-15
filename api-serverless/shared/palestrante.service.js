const Palestrante = require('./palestrante.model');
require('./mongo').connect();

function addPalestrante(palestrante) {
    return new Promise((resolve, reject) => {
        Palestrante.create(palestrante).then(palestrante => {
            resolve(palestrante);
        }).catch(err => {
            reject(err.status);
        });
    });
}

module.exports = { addPalestrante };