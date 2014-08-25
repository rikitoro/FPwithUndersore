var sut = require('../nth.js');

var expect = require('expect.js');

var letters = ['a', 'b', 'c'];

describe('nativeNth', function() {
  it("配列と1を渡すと配列の第1要素を返す", function() {
    expect(sut.nativeNth(letters, 1)).to.eql('b');
  });

  it("{}, 1を渡すとundefinedを返す", function() {
    expect(sut.nativeNth({}, 1)).to.be(undefined);
  });

});

describe('nth', function() {
  it("配列と1を渡すと第1要素を返す", function() {
    expect(sut.nth(letters, 1)).to.eql('b');
  });

  it("'文字列と0を渡すと文字列の最初の文字を返す", function() {
    expect(sut.nth('abc', 0)).to.eql('a');
  });

  it("{}, 2を渡すと'インデックス指定可能でないデータ型はサポートされていません。'というメッセージでエラーを投げる", function() {
    expect(function() {sut.nth({}, 1)}).to.throwException(/インデックス指定可能でないデータ型はサポートされていません。/);
  });

  it("配列と範囲外のインデックスを渡すと'指定されたインデックスは範囲外です。'というメッセージの例外を投げる", function() {
    expect(function() {sut.nth(letters, 1000)})
    .to.throwException(/指定されたインデックスは範囲外です。/);
  });

  it("配列と数値以外を渡すと'インデックスは数値である必要があります。'というメッセージで例外を投げる", function() {
    expect(function() {sut.nth(letters, 'aaa')})
    .to.throwException(/インデックスは数値である必要があります。/);
  });

});

describe('second', function() {
  it("配列を渡すと2番目の要素を返す", function() {
    expect(sut.second(['a', 'b'])).to.eql('b');
  });

  it("文字列を渡すと2文字目を返す", function() {
    expect(sut.second('fogus')).to.eql('o');
  });

  it("{}を渡すと'インデックス指定可能でないデータ型はサポートされていません。'というメッセージで例外を投げる", function() {
    expect(function() {sut.second({})}).to.throwException(/インデックス指定可能でないデータ型はサポートされていません。/);
  });

});



