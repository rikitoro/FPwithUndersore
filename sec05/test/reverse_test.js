var sut = require('../reverse.js');

var expect = require('expect.js');

describe('stringReverse', function() {
  it('文字列を渡すと逆順にした文字列を返す',function() {
    expect(sut.stringReverse("abc")).to.eql("cba");
  });
  it('文字列以外を渡すとundefinedを返す', function() {
    expect(sut.stringReverse(42)).to.be(undefined);
  });
});

describe('polyrev', function() {
  it('文字列を渡すと逆順にした文字列を返す',function() {
    expect(sut.polyrev("abc")).to.eql("cba");
  });
  it('配列を渡すと逆順にした配列を返す', function() {
    expect(sut.polyrev([1,2,3])).to.eql([3,2,1]);
  });
  it('文字列および配列以外を渡すとundefinedを返す', function() {
    expect(sut.polyrev({a:1, b:2})).to.eql(undefined);
  });
  
});

describe('sillyReverse', function() {
  it('文字列を渡すと逆順にした文字列を返す',function() {
    expect(sut.sillyReverse("abc")).to.eql("cba");
  });
  it('配列を渡すと逆順にした配列を返す',function() {
    expect(sut.sillyReverse([1,2,3])).to.eql([3,2,1]);
  });
  it('文字列及び配列以外を渡すと42を返す',function() {
    expect(sut.sillyReverse(108)).to.eql(42);
  });
});