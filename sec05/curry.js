exports.curry = curry;
exports.curry2 = curry2;
exports.curry3 = curry3;

function curry (fun) {
  return function(arg) {
    return fun(arg);
  };
}

function curry2 (fun) {
  return function (secondArg) {
    return function (firstArg) {
      return fun(firstArg, secondArg);
    };
  };
}

function curry3 (fun) {
  return function(last) {
    return function(second) {
      return function(first) {
        return fun(first, second, last);
      };
    };
  };
}
// //////////////////
// var p = console.log;
// p(parseInt('11'));
// p(parseInt('11', 2));
// p(['11', '11', '11', '11'].map(parseInt));
// p(['11', '11', '11', '11'].map(curry(parseInt)));

// /////
// function div (n, d) {
//   return n / d;
// }

// var div10 = curry2(div)(10);
// p(div10(50));
// ////
// var parseBinaryString = curry2(parseInt)(2);
// p(parseBinaryString('111'));
// p(parseBinaryString('10'));


// ////
// var plays = [
//   {artist: "Burial", track: "Archangel"},
//   {artist: "Ben Frost", track: "Stomp"},
//   {artist: "Ben Frost", track: "Stomp"},
//   {artist: "Burial", track: "Archangel"},
//   {artist: "Emeralds", track: "Snores"},
//   {artist: "Burial", track:"Archangel"}
// ];

// var _ = require('underscore');

// p(
// _.countBy(plays, function(song) {
//   return [song.artist, song.track].join(" - ");
// })
// );

// function songToString (song) {
//   return [song.artist, song.track].join(" => ");
// }

// var songCount = curry2(_.countBy)(songToString);
// p(songCount(plays));

// /////
// var songsPlayed = curry3(_.uniq)(false)(songToString);
// p(songsPlayed(plays));
// var songsPlayed2 = curry3(_.uniq)(songToString)(false);
// p(songsPlayed2(plays));

// ///
// function toHex (n) {
//   var hex = n.toString(16);
//   return (hex.length < 2) ? [0, hex].join('') : hex;
// }

// function rgbToHexString(r, g, b) {
//   return ["#", toHex(r), toHex(g), toHex(b)].join('');
// }

// p(rgbToHexString(255, 254, 253));

// var blueGreenish = curry3(rgbToHexString)(255)(200);
// p(blueGreenish(0));

