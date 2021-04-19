import { SHA256 } from  'crypto-js'; 

export class Bloque{

    _hash: string;
    _hash_anterior: string;
    _archivo: string;
    _motivo: string;
    _fecha: Date
    _email: string;
    
    constructor(fecha: Date, hash_anterior: string, motivo: string, archivo:string, email: string){
        this.fecha  = fecha;
        this.archivo = archivo;
        this.motivo = motivo;
        this.hash_anterior = hash_anterior;
        this.email = email;
        this.hash = this.generarHash();
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

    get email(){
        return this._email;
    }

    set email(valor: string){
        this._email = valor;
    }

    toString(){
        return String(this.fecha).concat(this.hash_anterior, this.motivo, this.archivo, this.email)
    }

    generarHash(){
        let condicion = false;
        let hash = "";
        let nonce: number = 0;

        let datos = this.toString()

        while (!condicion){

            hash = String(SHA256(datos.concat(String(nonce))))
            
            if ( ((this.fecha.getDate() % 2) === 0) && (hash.substring(0,2) === "00")){
                condicion = true;
            }
            if ( ((this.fecha.getDate() % 2) === 1) && (hash.substring(0,1) === "0")){
                condicion = true;
            }
            nonce += 1;
        }

        return hash
    }
}