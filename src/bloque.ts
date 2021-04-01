import { SHA256 } from  'crypto-js'; 

export class Bloque{

    _hash: string;
    _hash_anterior: string;
    _transaccion: string;
    
    constructor(transaccion: string, hash_anterior?: string){
        this.hash = String(SHA256(transaccion));
        this.transaccion = transaccion;
        this.hash_anterior = hash_anterior;
    }

    get transaccion(){
        return this._transaccion;
    }

    set transaccion(valor: string){
        this._transaccion = valor;
    }

    get hash(){
        return this._hash;
    }

    set hash(valor: string){
        this._hash = valor;
    }

    get hash_anterior(){
        return this._hash_anterior;
    }

    set hash_anterior(valor: string){
        this._hash_anterior = valor;
    }

    static genesis(){
        return new Bloque("genesis");
    }
}