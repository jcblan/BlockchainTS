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

    private set chain( valor: Array<Bloque> ){
        this._chain = valor;
    }
    private get chain(){
        return this._chain;
    }

    public getBloque(index: number){
        return this.chain[index];
    }

    generarBloque(motivo: string, archivo: string){
        this.chain.push(new Bloque(new Date(), this.getBloque(this.chain.length-1).hash, motivo, archivo));
    }
}