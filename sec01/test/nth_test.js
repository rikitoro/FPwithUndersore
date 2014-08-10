var sut = require('../nth.js');

var expect = require('expect.js');

var letters = ['a', 'b', 'c'];

describe('nativeNth', function() {
  it("letters, 1を渡すと'b'を返す", function() {
    expect(sut.nativeNth(letters, 1)).to.eql('b');
  });

  it("{}, 1を渡すとundefinedを返す", function() {
    expect(sut.nativeNth({}, 1)).to.be(undefined);
  });

});

describe('nth', function() {
  it("letters, 1を渡すと'b'を返す", function() {
    expect(sut.nth(letters, 1)).to.eql('b');
  });

  it("'abc', 0を渡すと'a'を返す", function() {
    expect(sut.nth('abc', 0)).to.eql('a');
  });

  it.skip("{}, 2を渡すと例外を投げる", function() {
    expect(sut.nth({}, 1)).to.throwException("インデックス指定可能でないデータ型はサポートされていません。");
  });

  it.skip("letters, 1000を渡すと例外を投げる", function() {
    expect(sut.nth(letters, 1000)).to.throwException();
  });

  it.skip("letters, 'aaa'を渡すと例外を投げる", function() {
    expect(sut.nth(letters, 'aaa')).to.throwException();
  });



});

describe('second', function() {
  it("['a', 'b']を渡すと'b'を返す", function() {
    expect(sut.second(['a', 'b'])).to.eql('b');
  });

  it("'fogus'を渡すと'o'を返す", function() {
    expect(sut.second('fogus')).to.eql('o');
  });

  it.skip("{}を渡すと例外を投げる", function() {
    expect(sut.second({})).to.throwException();
  });

});



