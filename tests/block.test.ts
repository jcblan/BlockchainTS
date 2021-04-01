import { expect } from 'chai';
import { Bloque } from '../src/bloque';
import { SHA256 } from 'crypto-js';

describe('Block.constructor', () => {
    it('Datos de transacción debera crear bloque con transacción', () => {  
        const blck = new Bloque("Test Transacción");
        expect(blck.transaccion).to.equal("Test Transacción");
    });
    it('Datos de transacción debera crear bloque con hash de transacción', () => {  
        const blck = new Bloque("Test Transacción");
        const hash_trans = String(SHA256("Test Transacción"));
        expect(blck.hash).to.equal(hash_trans);
    });
    it('Hash anterior de bloque 1 debera ser bloque genesis', () => {  
        const blck = new Bloque("Test Transacción", Bloque.genesis().hash);
        expect(blck.hash_anterior).to.equal(Bloque.genesis().hash);
    });
});