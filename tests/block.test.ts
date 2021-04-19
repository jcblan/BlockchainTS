import { expect } from 'chai';
import { Bloque } from '../src/bloque';
import { SHA256 } from 'crypto-js';

describe('Block.constructor', () => {
    it('fecha, hash anterior, motivo y archivo debera crear bloque hasheando fecha, hash anterior, motivo y archivo ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O3, 21, 19, 30 ,0O0)
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email);
        const hash_test = blqe.generarHash();

        expect(blqe.hash).to.equal(hash_test);
    });
    it('Conjunto de datos debera generar bloque con esos datos', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O3, 21, 19, 30 ,0O0)
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email);

        expect(blqe.archivo).to.equal("archivo");
        expect(blqe.motivo).to.equal("motivo");
        expect(blqe.fecha.getTime()).to.equal(1619044200000);
        expect(blqe.email).to.equal("email@email.com");

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

    it('Fecha impar debera generar hash de bloque con 0 al inicio  ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O2, 21);
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email);
        expect(blqe.hash.substring(0,1)).to.equal("0");
    });
    it('Fecha par debera generar hash de bloque con 00 al inicio  ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O2, 22);
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email);
        expect(blqe.hash.substring(0,2)).to.equal("00");
    });
});