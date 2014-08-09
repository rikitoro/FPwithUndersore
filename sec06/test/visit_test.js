var sut = require('../visit.js');

var expect = require('expect.js');
var _ = require('underscore');
var rev = require('../invoker.js').rev;

describe('visit', function() {
  it ("_.identity, _.isNumber, 42を渡すとtrueが返る", function() {
    expect(sut.visit(_.identity, _.isNumber, 42)).to.be.true;
  });

  it ("_.isNumber, _.identity, [1, 2, null, 3]を渡すと" + 
    "[true, true, false, true]が返る", function() {
    expect(sut.visit(_.isNumber, _.identity, [1,2,null,3]))
    .to.eql([true, true, false, true]);
  });

  it ("\ n -> n*2, rev, _.range(10)を渡すと[18, 16,..,0]が返る", function() {
    expect(sut.visit(function(n) { return n*2; }, rev, _.range(10)))
    .to.eql([18,16,14,12,10,8,6,4,2,0]);
  });
});
