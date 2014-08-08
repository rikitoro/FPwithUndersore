var sut = require('../cat.js');

var should = require('should');
var _ = require('underscore');

describe('cat', function() {
  it ('[]と[]を渡すと[]を返す', function() {
    sut.cat([],[]).should.eql([]);
  });

  it ('[]と[1,2]を渡すと[1,2]を返す', function() {
    sut.cat([],[1,2]).should.eql([1,2]);
  });

  it ('[1,2]と[]を渡すと[1,2]を返す', function() {
    sut.cat([1,2],[]).should.eql([1,2]);
  });

  it ('[1,2]と[3,4,5]を渡すと[1,2,3,4,5]を返す', function() {
    sut.cat([1,2],[3,4,5]).should.eql([1,2,3,4,5]);
  });


})