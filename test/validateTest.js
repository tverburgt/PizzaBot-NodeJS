var assert = require('chai').assert;
var validate = require('../validate');


describe('Test validFormat function', function(){
    it('Return true with input: "5x5 (1, 3)"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)"), true);
    });
    it('Return true with input: "55x5 (1, 3)"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)"), true);
    });
    it('Return true with input: "55x55 (1, 3)"', function(){
        assert.equal(validate.validFormat("55x55 (1, 3)"), true);
    });
    it('Return true with input: "55x55 (11, 31)"', function(){
        assert.equal(validate.validFormat("55x55 (11, 31)"), true);
    });
    it('Return true with input: "5x5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)(4, 4)"), true);
    });
    it('Return true with input: "5x5 (1, 3)(4, 4)(2, 2)"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)(4, 4)(2, 2)"), true);
    });
    it('Return true with input: "5x5 (0, 0)(1, 3)(4, 4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)"', 
    function(){
        assert.equal(validate.validFormat("5x5 (0, 0)(1, 3)(4, 4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)"), true);
    });


    it('Return false with input: "5x5(1, 3)"', function(){
        assert.equal(validate.validFormat("5x5(1, 3)"), false);
    });
    it('Return false with input: "5x5 (1, 3 )"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3 )"), false);
    });
    it('Return false with input: "5x 5 (1, 3)"', function(){
        assert.equal(validate.validFormat("5x 5 (1, 3)"), false);
    });
    it('Return false with input: "5 x5 (1, 3)"', function(){
        assert.equal(validate.validFormat("5 x5 (1, 3)"), false);
    });
    it('Return false with input: " 5x5 (1, 3)"', function(){
        assert.equal(validate.validFormat(" 5x5 (1, 3)"), false);
    });
    it('Return false with input: "5x5 (1, 3)(4,4)"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)(4,4)"), false);
    });
    it('Return false with input: "5x5 (1,3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5x5 (1,3)(4, 4)"), false);
    });
    it('Return false with input: "5x 5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5x 5 (1, 3)(4, 4)"), false);
    });
    it('Return false with input: " 5x  5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat(" 5x  5 (1, 3)(4, 4)"), false);
    });
    it('Return false with input: "5 x  5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5 x  5 (1, 3)(4, 4)"), false);
    });
    it('Return false with input: "5x5(1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5x5(1, 3)(4, 4)"), false);
    });
    it('Return false with input: "5x5 (1, 3)(4"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)(4"), false);
    });
    it('Return false with input: "5x5 (1, 3)(4x"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3)(4x"), false);
    });
    it('Return false with input: "5g5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5g5 (1, 3)(4, 4)"), false);
    });
    it('Return false with input: "5.5x5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validFormat("5.5x5 (1, 3)(4, 4)"), false);
    });
    it('Return false with input: "5.5x5 (1, 3.5)(4, 4)"', function(){
        assert.equal(validate.validFormat("5x5 (1, 3.5)(4, 4)"), false);
    });
});



describe('Test validDeliveryPoints function', function(){
    it('Return true with input: "5x5 (1, 3)"', function(){
        assert.equal(validate.validDeliveryPoints("5x5 (1, 3)(4, 4)"), true);
    });
    it('Return true with input: "5x5 (1, 3)(4, 4)"', function(){
        assert.equal(validate.validDeliveryPoints("5x5 (1, 3)(4, 4)"), true);
    });
    it('Return true with input: "5x5 (1, 3)(4, 4)(2, 2)"', function(){
        assert.equal(validate.validDeliveryPoints("5x5 (1, 3)(4, 4)(2, 2)"), true);
    });
    it('Return true with input: "5x5 (0, 0)(1, 3)(4, 4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)"', function(){
        assert
        .equal(validate.validDeliveryPoints("5x5 (0, 0)(1, 3)(4, 4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)"), true);
    });
    it('Return false with input: "5x5 (10, 3)"', function(){
        assert.equal(validate.validDeliveryPoints("5x5 (10, 3)"), false);
    });
    it('Return false with input: "5x10 (1, 3)(4, 10)"', function(){
        assert.equal(validate.validDeliveryPoints("5x5 (1, 3)(4, 10)"), false);
    });
    it('Return false with input: "5x5 (1, 3)(4, 4)(20, 2)"', function(){
        assert.equal(validate.validDeliveryPoints("5x5 (1, 3)(4, 4)(20, 2)"), false);
    });
});