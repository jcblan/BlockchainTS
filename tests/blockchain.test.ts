import { expect } from 'chai';
import { Blockchain } from '../src/blockchain';


describe('Blockchain.constructor', () => {
    it('new Blockchain() debera devolver instancia singleton', () => {  
       
        
        const blckchain1 = Blockchain.getInstancia();
        const blckchain2 = Blockchain.getInstancia();

        expect(blckchain1).to.equal(blckchain2);
    });
    it('Instancia blockchain debera crear bloque genesis en blockchain', () => {  
       
        const blckchain = Blockchain.getInstancia();
        expect(blckchain.getBloque(0).archivo).to.equal("genesis");
        expect(blckchain.getBloque(0).hash_anterior).to.equal("undefined");
        expect(blckchain.getBloque(0).motivo).to.equal("genesis");
    });
    it('Generar un segundo bloque debera añadir el bloque despues del genesis ', () => {  
       
        const blckchain = Blockchain.getInstancia();

        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");

        expect(blckchain.getBloque(1).hash_anterior).to.equal(blckchain.getBloque(0).hash);
    });
    it('Generar dos bloques debera añadir el primero despues del genesis y el segundo despues del primero', () => {  
       
        const blckchain = Blockchain.getInstancia();

        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");
        blckchain.generarBloque("motivo 3er bloque", "archivo 3er bloque", "3erBloque@email.com");

        expect(blckchain.getBloque(1).hash_anterior).to.equal(blckchain.getBloque(0).hash);
        expect(blckchain.getBloque(2).hash_anterior).to.equal(blckchain.getBloque(1).hash);
    });
});