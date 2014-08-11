var sut = require('../skipTake.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('skipTake(n, coll)', function() {
  it('nに2を渡すとcollのインデックスが2の倍数となる要素を抜き出す', function() {
    expect(sut.skipTake(2, _.range(1, 4))).to.eql([1,3]);
  });

  it('nに3を渡すとcollのインデックスが2の倍数となる要素を抜き出す', function() {
    expect(sut.skipTake(3, _.range(20)))
    .to.eql([0,3,6,9,12,15,18]);
  });
});

describe('skipTake2', function() {
  it('同じ引数に対してskipTakeと同じ結果を返す', function() {
    expect(sut.skipTake2(3, _.range(20)))
    .to.eql(sut.skipTake(3, _.range(20)));
  });
});


