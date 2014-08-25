var sut = require('../parseAge.js');

var expect = require('expect.js'); 

describe('parseAge', function() {
  it("'42'を渡すと42を返す", function() {
    expect(sut.parseAge('42')).to.be(42);
  });

  it("42を渡すと例外を投げる", function() {
    expect(function() {sut.parseAge(42)}).to.throwError();
  });

  it("'frob'を渡すと0を返す", function() {
    expect(sut.parseAge('frob')).to.be(0);
  });

});

