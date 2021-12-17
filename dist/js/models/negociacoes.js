export class Negociacoes {
    constructor() {
        //Array<Negociacao> é  a mesma coisa de  Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray<Negociacao> é a mesma coisa de readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
