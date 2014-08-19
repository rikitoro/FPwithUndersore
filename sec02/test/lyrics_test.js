var sut = require('../lyrics.js');

var expect = require('expect.js');

describe('lyricSegment', function() {
  it('ビールが2本以上残っているときはひとつ取って隣に回す',function() {
    expect(sut.lyricSegment(2))
    .to.eql([ '2本のビールが残っている','2本のビール','ひとつ取って隣へ回せ','1本のビールが残ってる' ]);
  });

  it('ビールが1本の時はひとつ取って終わり',function() {
    expect(sut.lyricSegment(1))
    .to.eql([ '1本のビールが残っている','1本のビール','ひとつ取って隣へ回せ','もうビールは残ってない' ]);
  });
});

describe('song',function() {
  it('ビールの本数を一本づつ減らしながらlyricSegmentに歌わせることができる', function() {
    var song_of_two_beer =  
    [ '2本のビールが残っている',
      '2本のビール',
      'ひとつ取って隣へ回せ',
      '1本のビールが残ってる',
      '1本のビールが残っている',
      '1本のビール',
      'ひとつ取って隣へ回せ',
      'もうビールは残ってない' ]; 
    expect(sut.song(2,0,sut.lyricSegment))
    .to.eql(song_of_two_beer);
  });
});
