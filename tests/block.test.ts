import { expect } from 'chai';
import { Bloque } from '../src/bloque';
import { SHA256 } from 'crypto-js';

describe('Block.constructor', () => {
    it('fecha, hash anterior, motivo y archivo debera crear bloque hasheando fecha, hash anterior, motivo y archivo ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date()

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo);

        const hash_test = String(SHA256(String(fecha).concat(hash_anterior, motivo, archivo)));
        expect(blqe.hash).to.equal(hash_test);
    });

    it('dos bloque con los mismos datos deberan tener el mismo hash ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date()

        const blqe1 = new Bloque(fecha, hash_anterior, motivo, archivo);
        const blqe2 = new Bloque(fecha, hash_anterior, motivo, archivo);

        expect(blqe1.hash).to.equal(blqe2.hash);
    });
});