// router/RouterAge.js
const express = require('express');
const ControlIdade = require('../control/ControlIdade');
const MiddlewareIdade = require('../middleware/MiddlewareIdade');

module.exports = class RouterAge {
    criarRotasAge() {
        this._router = express.Router();
        this._controleIdade = new ControlIdade();
        this._middlewareIdade = new MiddlewareIdade();

        // Trata a rota GET: /idade/:idade
        this._router.get('/:idade',
            this._middlewareIdade.validar_idade, // Valida se a idade é um número
            this._controleIdade.controle_get_calcular_tempo // Chama o controlador
        );

        return this._router;
    }
};

