var sut = require('../tcLength.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('tcLength', function() {

  it('[]を渡すと0を返す', function() {
    expect(sut.tcLength([])).to.be(0);
  });

  it("['a']を渡すと1を返す", function() {
    expect(sut.tcLength(['a'])).to.be(1);
  });  

  it('_.range(10)を渡すと10を返す', function() {
    expect(sut.tcLength(_.range(10))).to.be(10);
  });
});