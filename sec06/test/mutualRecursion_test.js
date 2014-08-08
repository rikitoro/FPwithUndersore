var sut = require('../mutualRecursion.js');

var expect = require('expect.js');

describe('evenSteven', function() {
  it('4を渡すとtrueが返る', function() {
    expect(sut.evenSteven(4)).to.be.true;
  })

  it('11を渡すとfalseが返る', function() {
    expect(sut.evenSteven(11)).to.be.false;
  })
});

describe('oddJohn', function() {
  it('4を渡すとfalseが返る', function() {
    expect(sut.oddJohn(4)).to.be.false;
  })

  it('11を渡すとtrueが返る', function() {
    expect(sut.oddJohn(11)).to.be.true;
  })
});