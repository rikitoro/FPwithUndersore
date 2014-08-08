var sut = require('../depthSearch.js');

var expect = require('expect.js');
var construct = require('../construct.js').construct;

var influences = [
  ['Lisp', 'SmallTalk'],
  ['Lisp', 'Scheme'],
  ['SmallTalk', 'Self'],
  ['Scheme','JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'JavaScript'],
  ['Self', 'Lua']
];

describe('depthSearch', function() {
  it("influences, ['Lisp'], []を渡すと、" +
    "'Lisp','SmallTalk','Self','Lua','JavaScript','Scheme'が返る",
    function() {
      expect(sut.depthSearch(influences, ['Lisp'], []))
      .to.contain('Lisp','SmallTalk','Self','Lua','JavaScript','Scheme');
    });

    it("influences, ['SmallTalk', 'Self'], []を渡すと、" +
    "'SmallTalk','Self','Lua','JavaScript'が返る",
    function() {
      expect(sut.depthSearch(influences, ['SmallTalk', 'Self'], []))
      .to.contain('SmallTalk','Self','Lua','JavaScript');
    });

  it("influencesに['Lua', 'Io']を追加して, ['Lisp'], []を渡すと、" +
    "'Lisp','SmallTalk','Self','Lua','JavaScript','Scheme','Io'が返る",
    function() {
      expect(sut.depthSearch(construct(['Lua', 'Io'],influences),
       ['Lisp'], []))
      .to.contain('Lisp','SmallTalk','Self','Lua','JavaScript','Scheme','Io');
    });
});