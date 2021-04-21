import { expect } from 'chai';
import { SHA256 } from 'crypto-js';
import { HashGeneratorPar } from '../src/hashGeneratorPar';

describe('HashGeneratorpar.generarHash', () => {
    it('Estrategia HashGeneratorPar debera generar hash de bloque con 00 al inicio  ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O2, 22);
        const email = "email@email.com"

        const strategy = new HashGeneratorPar();
        const hash = strategy.generarHash(String(fecha).concat(hash_anterior, motivo, archivo, email));

        expect(hash.substring(0,2)).to.equal("00");
    });
});