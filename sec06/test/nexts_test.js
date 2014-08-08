var sut = require('../nexts.js');

var expect = require('expect.js');

var influences = [
  ['Lisp', 'SmallTalk'],
  ['Lisp', 'Scheme'],
  ['SmallTalk', 'Self'],
  ['Scheme','JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'JavaScript'],
  ['Self', 'Lua']
];

describe('nexts', function() {
  it("influencesと'Lisp'を渡すと返り値には'SmallTalk','SmallTalk'が含まれる", function() {
    expect(sut.nexts(influences, 'Lisp')).to.contain('Scheme','SmallTalk');
  });

  it("influencesと'SmallTalk'を渡すと['Self']を返す", function() {
    expect(sut.nexts(influences, 'SmallTalk')).to.eql(['Self']);
  });

  it("influencesと'Self'を渡すと返り値には'JavaScript','Lua'が含まれる", function() {
    expect(sut.nexts(influences, 'Self')).to.contain('JavaScript','Lua');
  });

});

