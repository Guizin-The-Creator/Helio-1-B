module.exports = class MiddlewareAge {
    validar_idade(request, response, next) {
        const idade = request.params.idade;
        if (isNaN(idade) || idade < 0) {
            const objResposta = {
                status: false,
                msg: "A idade deve ser um número positivo!",
            };
            response.status(400).send(objResposta);
        } else {
            next(); // Chama o próximo middleware ou rota
        }
    }
};
