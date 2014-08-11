var sut = require('../idempotence.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('second', function() {
  var a = [1, [10, 20, 30], 3]
  it('冪等ではない', function() {
    expect(sut.second(a)).not.to.eql(sut.secondTwice(a));
  });
});

describe('_.identity', function() {
  it('冪等である', function() {
    expect(_.identity(42)).to.eql(sut.dissociativeIdentity(42));
  });
});

describe('Math.abs', function() {
  it('冪等である', function() {
    expect(Math.abs(-42)).to.eql(Math.abs(Math.abs(-42)));
  });
});