var sut = require('../orify.js');

var expect = require('expect.js');

var _ = require('underscore');

///
var zeroOrOdd = sut.orify(_.isZero, _.isOdd);

describe('orify(_.isZero, isOdd)についてのテスト', function() {
  it('何も渡さないとfalseが返る', function() {
    expect(zeroOrOdd()).to.be.false;
  });

  it('0,2,4,6を渡すとtrueが返る', function() {
    expect(zeroOrOdd(0,2,4,6)).to.be.true;
  });

  it('2,4,6を渡すとfalseが返る', function() {
    expect(zeroOrOdd(2,4,6)).to.be.false;
  });

});