var expect = require('chai').expect;
var {getMap} = require('../map');

describe('Test getMap function', function(){
    it('A map object is returned', function(){
        expect(getMap("5x5 (1, 3)(4, 4)")).to.be.an('object');
    });
    it('The map object has all keys', function(){
        expect(getMap("5x5 (1, 3)(4, 4)")).to.have.all.keys('dimensions', 'delivery_points');
    });
});