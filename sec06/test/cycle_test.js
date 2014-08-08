var sut = require('../cycle.js');

var should = require('should');
var _ = require('underscore');

describe('cycle', function() {
  it('0と[1,2,3]を渡すと[]を返す', function() {
    sut.cycle(0,[1,2,3]).should.eql([]);
  });

  it('2と[1,2,3]を渡すと[1,2,3,1,2,3]を返す', function() {
    sut.cycle(2, [1,2,3]).should.eql([1,2,3,1,2,3]);
  });

  it('20と[1,2,3]を渡すと最初の11要素が[1,2,3,1,2,3,1,2,3,1,2]となる配列を返す', function() {
    _.take(sut.cycle(20,[1,2,3]),11).should.eql([1,2,3,1,2,3,1,2,3,1,2]);
  });

});