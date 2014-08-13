var sut = require('../freq.js');

var expect = require('expect.js');
var partial1   = require('../partial.js').partial1;
var rand       = require('../generateRandomCharacter.js').rand;
var repeatedly = require('../iterateUntil.js').repeatedly;
var skipTake   = require('../skipTake.js').skipTake;
var _          = require('underscore');

describe('freq', function() {
  var a = repeatedly(1000, partial1(rand, 2));
  var copy = _.clone(a);

  it('freqに配列を渡してもその配列を変化させない', function() {
    var result = sut.freq(a);
    console.log(result);
    expect(a).to.eql(copy);
  });

  it('skipTakeと合成しても引数の配列を変化させない', function() {
    var result = sut.freq(skipTake(2, a));
    console.log(result);
    expect(a).to.eql(copy);
  });

});