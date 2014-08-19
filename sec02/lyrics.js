exports.lyricSegment = lyricSegment;
exports.song = song;

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

function song(start, end, lyricGen) {
  return _.reduce(_.range(start, end, -1),
    function (acc, n) {
      return acc.concat(lyricGen(n));
    }, []);
}

//p ( song(99, 0, lyricSegment) );