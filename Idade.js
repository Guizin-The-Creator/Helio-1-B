module.exports = class Idade {
    constructor(idade) {
        this._idade = idade; // Atribui diretamente ao atributo
    }

    set idade(idade) {
        this._idade = idade; // Use 'idade' em vez de '_idade'
    }
    
    get idade() {
        return this._idade;
    }

    calcularTempoVivido() {
        const dias = this.idade * 365; // Usar o getter aqui
        const horas = dias * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;

        return { dias, horas, minutos, segundos };
    }
};
