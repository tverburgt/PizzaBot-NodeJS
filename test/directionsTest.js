var assert = require('chai').assert;
var {getDirections} = require('../directions');

//x < current_x && y < current_y
var test1 = {
    delivery_points: [
        { x: 2, y: 2 },
        { x: 1, y: 1 }
    ]
}

//x > current_x && y < current_y
var test2 = {
    delivery_points: [
        { x: 2, y: 2 },
        { x: 3, y: 1 }
    ]
}

//x > current_x && y > current_y
var test3 = {
    delivery_points: [
        { x: 2, y: 2 },
        { x: 3, y: 3 }
    ]
}

//x < current_x && y > current_y
var test4 = {
    delivery_points: [
        { x: 2, y: 2 },
        { x: 1, y: 3 }
    ]
}

//x == current_x && y == current_y
var test5 = {
    delivery_points: [
        { x: 2, y: 2 },
        { x: 2, y: 2 }
    ]
}

var test6 = {
    delivery_points: [
        { x: 2, y: 2 },
        { x: 2, y: 2 },
        { x: 2, y: 2 }
    ]
}

var test7 = {
    dimensions: { x: 5, y: 5 },
    delivery_points: [
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      { x: 4, y: 4 },
      { x: 4, y: 2 },
      { x: 4, y: 2 },
      { x: 0, y: 1 },
      { x: 3, y: 2 },
      { x: 2, y: 3 },
      { x: 4, y: 1 }
    ]
  }

describe('Test getDirections function starting from origin (0, 0)', function(){
    it('Return EENNDWSD with delivery points (2, 2)(1, 1)', function(){
        assert.equal(getDirections(test1),'EENNDWSD');
    });
    it('Return EENNDESD with delivery points (2, 2)(3, 1)', function(){
        assert.equal(getDirections(test2),'EENNDESD');
    });
    it('Return EENNDEND with delivery points (2, 2)(3, 3)', function(){
        assert.equal(getDirections(test3),'EENNDEND');
    });
    it('Return EENNDWND with delivery points (2, 2)(1, 3)', function(){
        assert.equal(getDirections(test4),'EENNDWND');
    });
    it('Return EENNDD with delivery points (2, 2)(2, 2)', function(){
        assert.equal(getDirections(test5),'EENNDD');
    });
    it('Return EENNDDD with delivery points (2, 2)(2, 2)(2, 2)', function(){
        assert.equal(getDirections(test6),'EENNDDD');
    });
    it('Return DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD with delivery points "5x5 (0, 0)(1, 3)(4, 4)(4, 2)(4, 2)(0, 1)(3, 2)(2, 3)(4, 1)"', function(){
        assert.equal(getDirections(test7),'DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD');
    });
});


//(0, 0)(0, 0)(0, 0)(0, 0)(0, 0)