var sut = require('../curryForFluentApi.js');

var expect = require('expect.js');

describe('withinRange', function() {
  it("20以上の値を渡すと['20より小さい必要があります']を返す",function() {
    expect(sut.withinRange(20)).to.eql(['20より小さい必要があります']);
  });
  it("10以下の値を渡すと['10より大きい必要があります']を返す",function() {
    expect(sut.withinRange(10)).to.eql(['10より大きい必要があります']);
  });
  it("10より大きく20より小さい値を渡すと[]を返す",function() {
    expect(sut.withinRange(11)).to.eql([]);
  });


});