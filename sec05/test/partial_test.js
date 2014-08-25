var sut = require('../partial.js');

var expect = require('expect.js');

function div (n, d) {
  return n / d;
}

function add (a, b, c) {
  return a + b + c;
}

describe('partial1', function() {
  it('2引数関数と第一引数を渡すと第一引数をバインドした1引数関数を返す',function() {
    var div10by = sut.partial1(div, 10);
    expect(div10by(5)).to.be(2);
  });
});

describe('partial2', function() {
  it('2引数関数と第1,2引数を渡すと第1,2引数をバインドした関数を返す',function() {
    var div10by5 = sut.partial2(div, 10, 5);
    expect(div10by5()).to.be(2);
  });

  it('3引数関数と第1,2引数を渡すと第1,2引数をバインドした1引数関数を返す',function() {
    var add13 = sut.partial2(add, 10, 3);
    expect(add13(2)).to.be(15);
  });
});

describe('partial', function() {
  it('2引数関数と第1,2引数を渡すと第1,2引数をバインドした関数を返す',function() {
    var div10by5 = sut.partial(div, 10, 5);
    expect(div10by5()).to.be(2);
  });

  it('3引数関数と第1,2引数を渡すと第1,2引数をバインドした1引数関数を返す',function() {
    var add13 = sut.partial(add, 10, 3);
    expect(add13(2)).to.be(15);
  });
});
