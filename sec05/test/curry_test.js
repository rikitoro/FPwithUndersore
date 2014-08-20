var sut = require('../curry.js');

var expect = require('expect.js');
var _ = require('underscore');

var plays = [
  {artist: "Burial", track: "Archangel"},
  {artist: "Ben Frost", track: "Stomp"},
  {artist: "Ben Frost", track: "Stomp"},
  {artist: "Burial", track: "Archangel"},
  {artist: "Emeralds", track: "Snores"},
  {artist: "Burial", track:"Archangel"}
];

var songToString = function(song) { 
  return [song.artist, song.track].join("<=>");
};

function toHex (n) {
  var hex = n.toString(16);
  return (hex.length < 2) ? [0, hex].join('') : hex;
}

function rgbToHexString(r, g, b) {
  return ["#", toHex(r), toHex(g), toHex(b)].join('');
}


describe('curry2',function() {
  var div = function(n, d) { return n / d; };
  it('2変数関数を第2引数からカリー化できる',function() {
    var divBy10 = sut.curry2(div)(10);
    expect(divBy10(50)).to.eql(5);
  });

  it('perseIntの第2引数(基数)を固定できる',function() {
    var parseBinaryString = sut.curry2(parseInt)(2);
    expect(parseBinaryString('101')).to.be(5);
  });

  it('countByの第2引数に変換関数を渡すようにする',function() {
    var songCount = sut.curry2(_.countBy)(songToString);
    expect(songCount(plays)).to.eql(
      { 'Burial<=>Archangel': 3,
        'Ben Frost<=>Stomp': 2,
        'Emeralds<=>Snores': 1 });
  });
});

describe('curry3', function() {
  it('_.uniqの第3、第2引数を固定することができる', function() {
    var songPlayed = sut.curry3(_.uniq)(false)(songToString);
    expect(songPlayed(plays)).to.eql(
      [ { artist: 'Burial', track: 'Archangel' },
        { artist: 'Ben Frost', track: 'Stomp' },
        { artist: 'Emeralds', track: 'Snores' } ]);
  });

  it('3引数を取る関数の第2,3引数を固定した関数を返すことができる',function() {
    var blueGreenish = sut.curry3(rgbToHexString)(255)(200);
    expect(blueGreenish(0)).to.eql("#00c8ff");
  });
});

