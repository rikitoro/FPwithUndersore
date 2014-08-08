var sut = require('../andify.js');

var expect = require('expect.js');

var _ = require('underscore');

///
var evenNums = sut.andify(_.isNumber, _.isEven);

describe('andify(_.isNumber, isEven)についてのテスト', function() {
  it('1,2を渡すとfalseが返る', function() {
    expect(evenNums(1,2)).to.be.false;
  });

  it('2,4,6,8を渡すとtrueが返る', function() {
    expect(evenNums(2,4,6,8)).to.be.true;
  });

  it('2,4,6,8,9を渡すとfalseが返る', function() {
    expect(evenNums(2,4,6,8,9)).to.be.false;
  });


  it("'a', 2, 4を渡すとfalseが返る", function() {
    expect(evenNums('a',2,4)).to.be.false;
  });

});