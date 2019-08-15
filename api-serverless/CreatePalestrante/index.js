const palestrantes = require('../shared/palestrante.service');

module.exports = async function(context, req) {
    await palestrantes.addPalestrante(req.body).then(data => {
        context.res = {
            status: 201,
            body: data
        };
    }).catch(err => {
        context.res = {
            status: 500,
            body: err
        };
    });
};