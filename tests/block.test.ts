import { expect } from 'chai';
import { Bloque } from '../src/bloque';
import { SHA256 } from 'crypto-js';
import { HashGeneratorStrategy } from '../src/hashGeneratorStrategy';

describe('Block.constructor', () => {
    it('fecha, hash anterior, motivo y archivo debera crear bloque hasheando fecha, hash anterior, motivo y archivo ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O3, 21, 19, 30 ,0O0)
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email,HashGeneratorStrategy.getStrategy(fecha.getDate()));
        const hash_test = blqe.strategy.generarHash(blqe.toString());
        expect(blqe.hash).to.equal(hash_test);
    });
    it('Conjunto de datos debera generar bloque con esos datos', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date(2021, 0O3, 21, 19, 30 ,0O0)
        const email = "email@email.com"

        const blqe = new Bloque(fecha, hash_anterior, motivo, archivo, email, HashGeneratorStrategy.getStrategy(fecha.getDate()));

        expect(blqe.archivo).to.equal("archivo");
        expect(blqe.motivo).to.equal("motivo");
        expect(blqe.fecha.getDate()).to.equal(21);
        expect(blqe.fecha.getMonth()).to.equal(3);
        expect(blqe.fecha.getFullYear()).to.equal(2021);
        expect(blqe.email).to.equal("email@email.com");

    });

    it('Dos bloque con los mismos datos deberan tener el mismo hash ', () => {  
        const hash_anterior = String(SHA256("anterior"))
        const archivo = "archivo"
        const motivo = "motivo"
        const fecha = new Date()
        const email = "email@email.com"

        const blqe1 = new Bloque(fecha, hash_anterior, motivo, archivo, email, HashGeneratorStrategy.getStrategy(fecha.getDate()));
        const blqe2 = new Bloque(fecha, hash_anterior, motivo, archivo, email, HashGeneratorStrategy.getStrategy(fecha.getDate()));

        expect(blqe1.hash).to.equal(blqe2.hash);
    });
});