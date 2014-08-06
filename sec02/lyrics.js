var lyrics = [];

for (var bottles = 99; bottles > 0; bottles--) {
  lyrics.push(bottles + "本のビールが残ってる");
  lyrics.push(bottles + "本のビール");
  lyrics.push("ひとつ取って、隣に回せ");
  if (bottles > 1) {
    lyrics.push((bottles - 1) + "本のビールが残ってる");
  } else {
    lyrics.push("もうビールは残ってない");
  }
}

var p = console.log;
// p (lyrics);

//////////////////////////////////////////////////////////
var _ = require('underscore');

function lyricSegment (n) {
  return _.chain([])
    .push(n + "本のビールが残っている")
    .push(n + "本のビール")
    .push("ひとつ取って隣へ回せ")
    .tap(function (lyrics) {
      if (n > 1)
        lyrics.push((n - 1) + "本のビールが残ってる");
      else
        lyrics.push("もうビールは残ってない");
    })
    .value();
}

// p (lyricSegment(9));

function song(start, end, lyricGen) {
  return _.reduce(_.range(start, end, -1),
    function (acc, n) {
      return acc.concat(lyricGen(n));
    }, []);
}

p ( song(99, 0, lyricSegment) );