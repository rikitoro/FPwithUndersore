var sut = require('../unzip.js');

var should = require('should');
var expect = require('expect.js');

var _ = require('underscore');

describe('unzip', function() {
  it('[]を渡すと[[],[]]を返す', function() {
    expect(sut.unzip([])).to.eql([[],[]]);
  })

  it("[['a', 1]]を渡すと[['a'],[1]]を返す", function() {
    expect(sut.unzip([['a',1]])).to.eql([['a'],[1]]);
  })

  it("[['a',1], ['b',2]]を渡すと[['a','b'],[1,2]]を返す", function() {
    expect(sut.unzip([['a',1],['b',2]])).to.eql([['a','b'],[1,2]]);
  })

  it("_.zip([1,2,3],[4,5,6])を渡すと[[1,2,3],[4,5,6]]を返す", function() {
    expect(sut.unzip(_.zip([1,2,3],[4,5,6]))).to.eql([[1,2,3],[4,5,6]]);
  })

});

describe('constructPair', function() {
  it("['a',1][[],[]]を渡すと[['a'],[1]]を返す", function() {
    sut.constructPair(['a',1],[[],[]]).should.eql([['a'],[1]]);
  })

  it("['a',1][['b'],[2]]を渡すと[['a','b'],[1,2]]を返す", function() {
    sut.constructPair(['a',1],[['b'],[2]]).should.eql([['a','b'],[1,2]]);
  })

});

