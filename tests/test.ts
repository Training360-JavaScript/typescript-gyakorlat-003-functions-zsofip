import { expect } from 'chai';
import Calculator from '../src/lesson';
import { describe, it } from 'mocha';

interface IIndexable {
    [key: string]: any;
}

const testCalculator: IIndexable = new Calculator();

describe('AdderTest', function () {
    it('add', function () {
        const exists: boolean = typeof testCalculator['sum'] !== 'undefined';
        let result: boolean = false;
        
        if (exists) {
            result = testCalculator.sum(11, 22) === 33;
        }
        
        expect(result).equal(true);
    });
});

describe('SubstractorTest', function () {
    it('substract', function () {
        const exists: boolean = typeof testCalculator['difference'] !== 'undefined';
        let result: boolean = false;
        
        if (exists) {
            result = testCalculator.difference(11, 22) === -11;
        }
        
        expect(result).equal(true);
    });
});

describe('GetPropertyTest', function () {
    it('getProperty', function () {
        const exists: boolean = typeof testCalculator['getProperty'] !== 'undefined';
        let result: boolean = false;
        
        if (exists) {
            result = testCalculator.getProperty(
                {name: 'Evelin', city: 'Győr'},
            ) === 'Evelin';
        }
        
        expect(result).equal(true);
    });
});