var sut = require('../mapcat.js');

var expect = require('expect.js');
var construct = require('../construct.js').construct;

describe('cat',function() {
  it('複数の配列を渡すとそれらを繋いだ配列を返す',function() {
    expect(sut.cat([1,2],[3,4,5])).to.eql([1,2,3,4,5]);
  });

  it('ネストした配列を渡すと一段階まで展開した配列を返す',function() {
    expect(sut.cat([1,[2,3]],[4,5])).to.eql([1,[2,3],4,5]);
  });
});

describe('mapcat',function() {
  it('配列の各要素を配列に変換する関数を渡すと、変換され得られた配列をcatで繋いだ配列を返す',function() {
    expect(sut.mapcat(function(e) { return construct(e, ["*"])}, [1,2,3]))
    .to.eql([1,"*",2,"*",3,"*"]);
  });
});

describe('intepose',function() {
  it('補完要素と配列を渡すと配列の各要素の間に補完要素を挟んだ配列を返す', function() {
    expect(sut.interpose("*",[1,2,3])).to.eql([1,"*",2,"*",3]);
  });
});