var sut = require('../polyToString.js');

var expect = require('expect.js');

describe('polyToString', function() {
  it('数値を渡すと文字列に変換する',function() {
    expect(sut.polyToString(42)).to.eql("42");
  });

  it('配列を渡すと[]で構造化した文字列に変換する',function() {
    expect(sut.polyToString([1,2,3])).to.eql("[1,2,3]");
  });

  it('ネストした配列を渡すと[]でネスト構造化した文字列に変換する',function() {
    expect(sut.polyToString([1,2,[3,4]])).to.eql("[1,2,[3,4]]");
  });

  it('オブジェクトを渡すと{}で構造化した文字列を返す', function() {
    expect(sut.polyToString({a: 1, b: 2})).to.eql("{\"a\":1,\"b\":2}");
  });

  it('配列とオブジェクトがネストした構造を渡すと{}[]で構造化した文字列を返す',function() {
    expect(sut.polyToString([1,2,{a:42, b:[4,5,6]},77]))
    .to.eql("[1,2,{\"a\":42,\"b\":[4,5,6]},77]");
  });
});


