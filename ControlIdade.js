
const Idade = require('../model/Idade');

module.exports = class ControlIdade {
    controle_get_calcular_tempo(request, response) {
        // Recupera a idade passada pela URI
        const idade = request.params.idade;
        const age = new Idade(idade);


        const tempoVivido = age.calcularTempoVivido();

        response.status(200).send(tempoVivido);
    }
};

