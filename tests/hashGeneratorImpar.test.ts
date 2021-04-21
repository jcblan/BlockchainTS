import { expect } from 'chai';
import { SHA256 } from 'crypto-js';
import { HashGeneratorImpar } from '../src/hashGeneratorImpar';

describe('HashGeneratorImpar.generarHash', () => {
    it('Estrategia HashGeneratorImpar debera generar hash de bloque con 0 al inicio  ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O2, 21);
        const email = "email@email.com"

        const strategy = new HashGeneratorImpar();
        const hash = strategy.generarHash(String(fecha).concat(hash_anterior, motivo, archivo, email));
        
        expect(hash.substring(0,1)).to.equal("0");
    });
});