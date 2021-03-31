
export class Bloque{

    
    _transaccion: string;
    
    constructor(transaccion: string){
        this.transaccion = transaccion;
    }

    get transaccion(){
        return this._transaccion;
    }

    set transaccion(valor: string){
        this._transaccion = valor;
    }
}