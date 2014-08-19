var sut = require('../construct.js');

var expect = require('expect.js');

describe('construct', function() {
  it('要素と空の配列を渡すと、要素からなる配列を返す', function() {
    expect(sut.construct(100,[])).to.eql([100]);
  });

  it('要素と配列を渡すと、配列の先頭に要素を追加した新しい配列を返す', function() {
    expect(sut.construct(100,[1,2])).to.eql([100,1,2]);
  });
});