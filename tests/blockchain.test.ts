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
        blckchain.inicializar();

        expect(blckchain.getBloque(0).archivo).to.equal("genesis");
        expect(blckchain.getBloque(0).hash_anterior).to.equal("undefined");
        expect(blckchain.getBloque(0).motivo).to.equal("genesis");
    });
    it('Generar un segundo bloque debera añadir el bloque despues del genesis ', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");

        expect(blckchain.getBloque(1).hash_anterior).to.equal(blckchain.getBloque(0).hash);
    });
    it('Generar dos bloques debera añadir el primero despues del genesis y el segundo despues del primero', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");
        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");

        expect(blckchain.getBloque(1).hash_anterior).to.equal(blckchain.getBloque(0).hash);
        expect(blckchain.getBloque(2).hash_anterior).to.equal(blckchain.getBloque(1).hash);
    });
    it('Debera devolver array con indices si se verifica que falla la integridad del bloque en ese indice', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();
        
        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");
        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");

        expect(blckchain.verificarBlockchain()).to.equal(true);
    });

    it('Debera devolver bloque que concida con hash de busqueda', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");

        const hash_test = blckchain.getBloque(1).hash
        expect(blckchain.buscarPorHash(hash_test).hash).to.equal(blckchain.getBloque(1).hash);
    });
});