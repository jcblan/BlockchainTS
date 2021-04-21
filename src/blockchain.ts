import { Bloque } from './bloque';
import { HashGeneratorStrategy } from './hashGeneratorStrategy';


export class Blockchain{

    private static _instancia: Blockchain;
    private _chain: Array<Bloque> = new Array<Bloque>();

    private constructor(){
        this.inicializar();
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

    public generarBloque(motivo: string, archivo: string, email: string, anterior?: string,){
        const fecha = new Date();
        if (anterior == undefined){
            this.chain.push(new Bloque(fecha, this.getBloque(this.chain.length-1).hash, motivo, archivo, email, HashGeneratorStrategy.getStrategy(fecha.getDate())));
        }else{
            this.chain.push(new Bloque(fecha, anterior, motivo, archivo, email, HashGeneratorStrategy.getStrategy(fecha.getDate())));
        }
    }

    public verificarBlockchain(){
        let hsh_ant = "undefined";
        for (let blqe of this.chain){
            let hsh = blqe.strategy.generarHash(blqe.toString());
            if (hsh != blqe.hash){
                return false;
            }
            if (hsh_ant != blqe.hash_anterior){
                return false;
            }
            hsh_ant = hsh;
        }
        return true;
    }

    public inicializar(){
        this.chain = new Array<Bloque>();
        this.chain.push(new Bloque(new Date(0O000,0O0, 0O0), String(undefined), "genesis", "genesis", "genesis@genesis.com", HashGeneratorStrategy.getStrategy(1)));

    }


    public buscarPorHash(hash: string){
        for (let blqe of this.chain){
            if(blqe.hash.toString() === hash){
                return blqe;
            }
        }
        return null;
    }
}