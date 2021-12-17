import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  //Array<Negociacao> é  a mesma coisa de  Negociacao[]
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  //ReadonlyArray<Negociacao> é a mesma coisa de readonly Negociacao[]
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
