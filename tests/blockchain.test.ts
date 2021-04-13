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
});