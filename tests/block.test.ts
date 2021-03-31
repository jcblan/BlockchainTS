import { expect } from 'chai';
import { Bloque } from '../src/bloque';

describe('Block.constructor', () => {
    it('Datos de transacción debera crear bloque con transacción', () => {  
        const blck = new Bloque("Test Transacción");
        expect(blck.transaccion).to.equal("Test Transacción");
    });
});