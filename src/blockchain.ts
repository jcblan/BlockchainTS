import { Bloque } from './bloque';
import { SHA256 } from 'crypto-js';


export class Blockchain{

    private static _instancia: Blockchain;
    private _chain: Array<Bloque> = new Array<Bloque>();

    private constructor(){
        this.chain.push(new Bloque(new Date(0O000,0O0, 0O0), String(undefined), "genesis", "genesis", "genesis@genesis.com"));
    }

    public static getInstancia(){
        if (!Blockchain._instancia){
            Blockchain._instancia = new Blockchain();
        }
        
        return Blockchain._instancia;
    }

    // private set chain( valor: Array<Bloque> ){
    //     this._chain = valor;
    // }

    private get chain(){
        return this._chain;
    }

    public getBloque(index: number){
        return this.chain[index];
    }

    public generarBloque(motivo: string, archivo: string, email: string){
        this.chain.push(new Bloque(new Date(), this.getBloque(this.chain.length-1).hash, motivo, archivo, email));
    }

    public verificarBlockchain(){
        let hsh_ant = "undefined";
        let index_error = [];
        for (let blqe of this.chain){
            let hsh = blqe.generarHash();
            if (hsh != blqe.hash){
                index_error.push(this.chain.indexOf(blqe));
            }
            if (hsh_ant != blqe.hash_anterior){
                if (!index_error.includes(this.chain.indexOf(blqe)))
                index_error.push(this.chain.indexOf(blqe));
            }
            hsh_ant = hsh;
        }
        return index_error;
    }


    public buscarPorHash(hash: string){
        for (let blqe of this.chain){
            if(blqe.hash === hash){
                return blqe
            }else{
                throw new Error("No se encuentra ese hash en la blockchain");
            }

        }
    }
}