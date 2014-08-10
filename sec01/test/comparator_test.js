var sut = require('../comparator.js');

var expect = require('expect.js');

var array = [2, 3, -1, -6, 0, -108, 42, 10];

describe('Array#sort', function() {
  it("array.sort()を実行すると[-1,-108,-6,0,10,2,3,42]が返る", function() {
    expect(array.sort()).to.eql([-1,-108,-6,0,10,2,3,42]);
  });
});

describe('compareLessThanOrEqual', function() {
  it("array.sortに渡すと[-108,-6,-1,0,2,3,10,42]が返る", function() {
    expect(array.sort(sut.compareLessThanOrEqual))
    .to.eql([-108,-6,-1,0,2,3,10,42]);
  });
});

describe('comparator',function() {
  it("array.sort(comparator(lessOrEqual))を実行すると" +
    "[-108,-6,-1,0,2,3,10,42]が返る", function() {
    expect(array.sort(sut.comparator(sut.lessOrEqual)))
    .to.eql([-108,-6,-1,0,2,3,10,42]);
  });
});