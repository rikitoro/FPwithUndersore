var sut = require('../actions.js');

var expect = require('expect.js');

describe('actions',function() {
  it('2乗を求めるアクションを2つつなぐと、引数の2乗の結果と4乗の結果からなる配列を返す関数を生成する', function() {
    var doubleSquareAction = sut.actions(
      [sut.mSqr(), sut.mSqr()],
      function(values) { return values; });
    expect(doubleSquareAction(10)).to.eql([100, 10000]);
  });
});