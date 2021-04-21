import { HashGeneratorStrategy } from './hashGeneratorStrategy';

export class Bloque{

    _hash: string;
    _hash_anterior: string;
    _archivo: string;
    _motivo: string;
    _fecha: Date;
    _email: string;
    _strategy: HashGeneratorStrategy;
    
    constructor(fecha: Date, hash_anterior: string, motivo: string, archivo:string, email: string, strategy: HashGeneratorStrategy){
        this.fecha  = fecha;
        this.archivo = archivo;
        this.motivo = motivo;
        this.hash_anterior = hash_anterior;
        this.email = email;
        this.strategy = strategy;
        this.hash = this.strategy.generarHash(this.toString());
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
        this._motivo = valor;
    }

    get email(){
        return this._email;
    }

    set email(valor: string){
        this._email = valor;
    }

    get strategy(){
        return this._strategy;
    }

    set strategy(valor: HashGeneratorStrategy){
        this._strategy = valor;
    }

    toString(){
        return String(this.fecha).concat(this.hash_anterior, this.motivo, this.archivo, this.email);
    }

}