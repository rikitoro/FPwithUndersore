var sut = require('../summRec.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('summ(array)', function() {
  it('配列arrayの要素の和を返す', function() {
    expect(sut.summ(_.range(1,11))).to.be(55);
  });
});

describe('summRec(array, seed)', function() {
  it('seedに0を渡すとsumm(array)と同じ結果を返す', function() {
    expect(sut.summRec(_.range(1,101),0))
    .to.be(sut.summ(_.range(1,101)));
  });
});

