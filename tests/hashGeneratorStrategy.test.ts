import { expect } from 'chai';
import { HashGeneratorImpar } from '../src/hashGeneratorImpar';
import { HashGeneratorPar } from '../src/hashGeneratorPar';
import { HashGeneratorStrategy } from '../src/hashGeneratorStrategy';

describe('HashGeneratorStrategy.getStrategy', () => {
    it('Debera devolver objeto HashGeneratorImpar en caso de fecha impar ', () => {  
        
        const strategy = HashGeneratorStrategy.getStrategy(1);

        expect(strategy).to.be.an.instanceOf(HashGeneratorImpar);
    });
    it('Debera devolver objeto HashGeneratorPar en caso de fecha par ', () => {  
        
        const strategy = HashGeneratorStrategy.getStrategy(2);

        expect(strategy).to.be.an.instanceOf(HashGeneratorPar);
    });
});