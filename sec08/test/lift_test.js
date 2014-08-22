var sut = require('../lift.js');

var expect = require('expect.js');
var _ = require('underscore');

var actions = require('../actions.js').actions;
var note = require('../fail.js').note;


describe('lift',function() {
  var sqr = function(x) { return x * x; };
  var mSqr2  = sut.lift(sqr)
  var mNote2 = sut.lift(note, _.identity);
  var mNeg   = sut.lift(function(n) { return -n; });

  it('liftでactionを生成し、actionsに渡すとactionを合成できる',function() {
    var negativeSqr2 = actions([mSqr2(), mNote2(), mNeg()],
      function(notUsed, state) { return state; });
    expect(negativeSqr2(100)).to.be(-10000);
  });
});