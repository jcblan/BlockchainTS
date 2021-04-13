import { Bloque } from './bloque';
import { SHA256 } from 'crypto-js';


export class Blockchain{

    private static _instancia: Blockchain;
    private _chain: Array<Bloque> = new Array<Bloque>();

    private constructor(){
        this.chain.push(new Bloque(new Date(0O000,0O0, 0O0), String(undefined), "genesis", "genesis"));
    }

    public static getInstancia(){
        if (!Blockchain._instancia){
            Blockchain._instancia = new Blockchain();
        }
        
        return Blockchain._instancia;
    }

    set chain( valor: Array<Bloque> ){
        this._chain = valor;
    }
    get chain(){
        return this._chain;
    }

    getBloque(index: number){
        return this.chain[index];
    }
}