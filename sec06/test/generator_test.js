var sut = require('../generator.js');

var expect = require('expect.js');
var _      = require('underscore');

var ints = sut.generator(0, _.identity, function(n) { return n + 1; });

exports.ints = ints;
describe('genHead', function() {
  it('intsを渡すと0を返す', function() {
    expect(sut.genHead(ints)).to.be(0);
  });

  it('genTail(ints)を渡すと1を返す', function() {
    expect(sut.genHead(sut.genTail(ints))).to.be(1);
  });

  it('genTail(genTail(ints))を渡すと2を返す', function() {
    expect(sut.genHead(sut.genTail(sut.genTail(ints)))).to.be(2);
  });
});


describe('genTake', function() {
  it('0, intsを渡すと[]を返す', function() {
    expect(sut.genTake(0, ints)).to.eql([]);
  });

  it('10, intsを渡すと[0,1,..,9]を返す', function() {
    expect(sut.genTake(10, ints)).to.eql(_.range(10));
  });

  it('1000, intsを渡すと[0,1,..,999]を返す', function() {
    expect(sut.genTake(1000, ints)).to.eql(_.range(1000));
  });

  it('100000, intsを渡すと[0,1,..,9999]を返す', function() {
    expect(sut.genTake(10000, ints)).to.eql(_.range(10000));
  });
});