export class Negociacao {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }
  get data() : Date { 
    const data = new Date(this._data.getTime()); //modo defensivo? Mesmo alterando a data no codigo a valor original permanece
    return data;
  };
  // get quantidade() : number { return this._quantidade};
  // get valor() : number { return this._valor };
  get volume () : number { return this.quantidade * this.valor };
}