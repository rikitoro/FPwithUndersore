var sut = require('../processTriples.js');

var expect = require('expect.js');

describe('processTriples',function() {
  it('適切な文字列を渡すと処理した文字列を返す',function() {
    expect(sut.processTriples("[[2,1,3],[7,7,1],[0,9,5]]"))
    .to.eql("1,7,9");
  });

  it('文字列をパースした際、要素数が3でない配列が含まれるときErrorを投げる',function() {
    expect(function() {sut.processTriples("[[2,1,3],[7,7,1,7,7],[0,9,5]]")})
    .to.throwError(/それぞれの配列は3つの要素を持っている必要があります/);
  });

});