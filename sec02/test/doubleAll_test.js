var sut = require('../doubleAll.js');

var expect = require('expect.js');

var nums = [1,2,3,4,5];

describe('doubleAll', function() {
  it('配列を渡すとすべての要素を2倍にする',function() {
    expect(sut.doubleAll(nums)).to.eql([2,4,6,8,10]);
  });
});

describe('average',function() {
  it('配列を渡すとすべての要素の平均値を返す',function() {
    expect(sut.average(nums)).to.eql(3);
  });
});

describe('onlyEven', function() {
  it('配列を渡すと偶数の要素だけを抜き出した配列を返す',function() {
    expect(sut.onlyEven(nums)).to.eql([2,4]);
  });
});