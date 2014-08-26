var sut = require('../validateTripleStore.js');

var expect = require('expect.js');

describe('validateTripleStore',function() {
  it('適切な配列を渡すとそのまま返す',function() {
    expect(sut.validateTripleStore([[2,1,3],[7,7,1],[0,9,5]]))
    .to.eql([[2,1,3],[7,7,1],[0,9,5]]);
  });

  it('要素数が3でない配列からなる配列を渡すとErrorを投げる',function() {
    expect(function() {sut.validateTripleStore([[2,1,3],[7,7,1],[0,9,5,7]])})
    .to.throwError(/それぞれの配列は3つの要素を持っている必要があります/);
  });

});