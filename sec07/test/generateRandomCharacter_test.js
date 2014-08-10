var sut = require('../generateRandomCharacter.js');

var expect = require('expect.js');

describe('composedRandomString', function() {
  it('20を渡すと文字列長20の文字列を返す', function() {
    expect(sut.composedRandomString(20)).to.have.length(20);
  });
  it('20を渡すと/[0-9a-z]{20}/にマッチする文字列を返す', function() {
    expect(sut.composedRandomString(20)).to.match(/[0-9a-z]{20}/);
  });
});

describe('generateString', function() {
  var always = function(value) {
    return function() { return value; };
  };

  var result = sut.generateString(always("a"), 10);

  it("特定の長さを持った文字列を返す", function() {
    expect(result).to.be.a('string');
    expect(result).to.have.length(10);
  });

  it("文字生成関数が返す文字に合致する", function() {
    expect(result).to.eql('aaaaaaaaaa');
  });

});

