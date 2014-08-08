var sut = require('../flat.js');

var expect = require('expect.js');

describe('flat', function() {
  it ("[[1,2],[3,4]]を渡すと [1,2,3,4]が返る", function() {
    expect(sut.flat([[1,2],[3,4]])).to.eql([1,2,3,4]);
  });

  it ("[[1,2],[3,4,[5,6,[[[7]]],8]]]を渡すと [1,2,3,4,5,6,7,8]が返る", function() {
    expect(sut.flat([[1,2],[3,4,[5,6,[[[7]]],8]]]))
    .to.eql([1,2,3,4,5,6,7,8]);
  });

});