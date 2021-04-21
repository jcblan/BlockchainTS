import { HashGeneratorImpar } from "./hashGeneratorImpar";
import { HashGeneratorPar } from "./hashGeneratorPar";

export abstract class HashGeneratorStrategy{

    abstract generarHash(datos: string): string;

    static getStrategy(fecha: number){
        if  ((fecha % 2) == 0){
            return new HashGeneratorPar();
        }else {
            return new HashGeneratorImpar();
        }
    }

}