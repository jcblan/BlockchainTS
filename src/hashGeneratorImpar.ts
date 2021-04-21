import { SHA256 } from 'crypto-js';
import { HashGeneratorStrategy } from './hashGeneratorStrategy';

export class HashGeneratorImpar implements HashGeneratorStrategy{

    generarHash(datos: string){
        let hash = "";
        let nonce: number = 0;

        while (true){

            hash = String(SHA256(datos.concat(String(nonce))))
            
            if (hash.substring(0,1) === "0"){
                return hash;
            }
            nonce += 1;
        }
    }

}