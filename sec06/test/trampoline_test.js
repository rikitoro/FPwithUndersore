var sut = require('../trampoline');

var expect = require('expect.js');

describe('evenOline', function() {
  it('0を渡すとtrueが返る', function() {
    expect(sut.evenOline(0)).to.be.true;
  });

  it('evenOline(3)はfunctionである', function() {
    expect(sut.evenOline(3)).to.be.a('function');
  });

  it('evenOline(3)()はfunctionである', function() {
    expect(sut.evenOline(3)()).to.be.a('function');
  });

  it('evenOline(3)()()はfunctionである', function() {
    expect(sut.evenOline(3)()()).to.be.a('function');
  });

  it('evenOline(3)()()()はfalseを返す', function() {
    expect(sut.evenOline(3)()()).to.be.false;
  });

});

describe('oddOline', function() {
  it('0を渡すとfalseが返る', function() {
    expect(sut.oddOline(0)).to.be.false;
  });
});

describe('trampoline', function() {
  it('oddOline, 3を渡すとtrueを返す', function() {
    expect(sut.trampoline(sut.oddOline, 3)).to.be.true;
  });

  it('evenOline, 200000を渡すとtrueを返す', function() {
    expect(sut.trampoline(sut.evenOline, 200000)).to.be.true;
  });

  it('oddOline, 300000を渡すとfalseを返す', function() {
    expect(sut.trampoline(sut.oddOline, 300000)).to.be.true;
  });

});

describe('isEvenSafe', function() {
  it('200001を渡すとfalseを返す', function() {
    expect(sut.isEvenSafe(200001)).to.be.false;
  });
});

describe('isOddSafe', function() {
  it('200001を渡すとtrueを返す', function() {
    expect(sut.isOddSafe(200001)).to.be.true;
  });
});