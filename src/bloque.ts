import { SHA256 } from  'crypto-js'; 

export class Bloque{

    _hash: string;
    _hash_anterior: string;
    _archivo: string;
    _motivo: string;
    _fecha: Date
    
    constructor(fecha: Date, hash_anterior: string, motivo: string, archivo:string){
        this.fecha  = fecha;
        this.archivo = archivo;
        this.motivo = motivo;
        this.hash_anterior = hash_anterior;
        this.hash = String(SHA256(String(this.fecha).concat(this.hash_anterior, this.motivo, this.archivo) ));
    }

    get archivo(){
        return this._archivo;
    }

    set archivo(valor: string){
        this._archivo = valor;
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

    get fecha(){
        return this._fecha;
    }

    set fecha(valor: Date){
        this._fecha = valor;
    }

    get motivo(){
        return this._motivo;
    }

    set motivo(valor: string){
        this._motivo = valor
    }

}