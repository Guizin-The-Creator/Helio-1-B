const express = require('express');
const RouterAge = require('./router/RouterIdade');

const app = express();
const portaServico = 3000;

// Middleware para habilitar o parsing de JSON no corpo das requisições
app.use(express.json());

const roteadorAge = new RouterAge();
// Caso chegue uma requisição para /idade
app.use('/idade', roteadorAge.criarRotasAge());

// Inicia a espera por requisições HTTP
app.listen(portaServico, () => {
    console.log(`API rodando no endereço: http://localhost:${portaServico}/`);
});
