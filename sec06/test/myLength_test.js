var sut = require('../myLength.js');

var should = require('should');
var _ = require('underscore');

describe('myLength', function() {
  it('[]を渡すと0を返す', function() {
    sut.myLength([]).should.equal(0);
  });

  it('[1]を渡すと1を返す', function() {
    sut.myLength([1]).should.equal(1);
  });

  it('[\'a\', \'b\', \'c\']を渡すと3を返す', function() {
    sut.myLength(['a', 'b', 'c']).should.equal(3);
  });

  it('_.range(100)を渡すと100を返す', function() {
    sut.myLength(_.range(100)).should.equal(100);
  });

});

