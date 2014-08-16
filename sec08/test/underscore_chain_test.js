var sut = require('underscore');

var expect = require('expect.js');

describe('chain',function() {
  var library = [
    {title: "SICP", isbn: "0262010771", ed: 1},
    {title: "SICP", isbn: "0262510871", ed: 2},
    {title: "Joy of Clojure", isbn: "1935182641", ed: 1}    
  ]

  it.skip('メソッドチェーンはUnderscoreオブジェクトを返す', function() {
    expect(sut.chain(library).pluck('title').sort())
    .to.eql(sut);
  });

  it('value関数を使ってメソッドチェーン後の結果の値を抽出できる', function() {
    expect(sut.chain(library).pluck('title').sort().value())
    .to.eql(["Joy of Clojure", "SICP", "SICP"]);
  });

});