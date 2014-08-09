var sut = require('../influenced.js');

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

describe('influenced', function() {
  it("influences, 'Lisp'を渡すと['SmallTalk', 'Scheme']を返す", function() {
    expect(sut.influenced(influences, 'Lisp')).to.eql(['SmallTalk', 'Scheme']);
  });

  it("influences, 'Self'を渡すと['JavaScript', 'Lua']を返す", function() {
    expect(sut.influenced(influences, 'Self')).to.eql(['JavaScript', 'Lua']);
  });

});