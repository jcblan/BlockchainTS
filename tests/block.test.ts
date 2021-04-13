import { expect } from 'chai';
import { Bloque } from '../src/bloque';
import { SHA256 } from 'crypto-js';

describe('Block.constructor', () => {
    it('fecha, hash anterior, motivo y archivo debera crear bloque hasheando fecha, hash anterior, motivo y archivo ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date()
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email);

        const hash_test = String(SHA256(String(fecha).concat(hash_anterior, motivo, archivo, email)));
        expect(blqe.hash).to.equal(hash_test);
    });

    it('Dos bloque con los mismos datos deberan tener el mismo hash ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date()
        const email = "email@email.com"

        const blqe1 = new Bloque(fecha, hash_anterior, motivo, archivo, email);
        const blqe2 = new Bloque(fecha, hash_anterior, motivo, archivo, email);

        expect(blqe1.hash).to.equal(blqe2.hash);
    });
});