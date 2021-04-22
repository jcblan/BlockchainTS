import { expect } from 'chai';
import { Blockchain } from '../src/blockchain';
import { HashGeneratorStrategy } from '../src/hashGeneratorStrategy';


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
    
    it('Debera devolver true si se verifica la integridad de la blockchain', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");
        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");

        expect(blckchain.verificarBlockchain()).to.equal(true);
    });

    it('Debera devolver false si no se verifica la integridad de la blockchain', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");
        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com", "hash_erroneo");
        blckchain.generarBloque("motivo 3er bloque", "archivo 3er bloque", "3erBloque@email.com");

        expect(blckchain.verificarBlockchain()).to.equal(false);
    });


    it('Debera devolver bloque que concida con hash de busqueda', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");

        const hash_test = blckchain.getBloque(1).hash
        expect(blckchain.buscarPorHash(hash_test).hash).to.equal(blckchain.getBloque(1).hash);
    });

    it('Debera devolver null si no coincide con hash de busqueda', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");
        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");
        
        expect(blckchain.buscarPorHash("b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79")).to.equal(null);
    });

    it('getUltimoBloque debera devolver el ultimo bloque de la cadena', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        blckchain.generarBloque("motivo 1er bloque", "archivo 1er bloque", "1erBloque@email.com");
        blckchain.generarBloque("motivo 2do bloque", "archivo 2do bloque", "2doBloque@email.com");
    
        expect(blckchain.getUltimoBloque()).to.equal(blckchain.getBloque(2));
    });

    it('El hash_anterior del bloque 50 debera ser el hash del bloque 49. GenerarHash del Bloque 50 debera coincidir con el hash del bloque 50 ', () => {  
       
        const blckchain = Blockchain.getInstancia();
        blckchain.inicializar();

        for(let i = 1; i < 100; i++){
            blckchain.generarBloque("motivo".concat(String(i)),"archivo".concat(String(i)),"email".concat(String(i)));

        }
        const strategy = HashGeneratorStrategy.getStrategy(new Date().getDate());
        const hash_test = strategy.generarHash(blckchain.getBloque(50).toString());
        expect(blckchain.getBloque(50).hash_anterior).to.equal(blckchain.getBloque(49).hash);
        expect(blckchain.getBloque(50).hash).to.equal(hash_test);
    });

});