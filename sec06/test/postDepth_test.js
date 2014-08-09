var sut = require('../postDepth.js');

var expect = require('expect.js');
var _ = require('underscore');

var influences = [
  ['Lisp', 'SmallTalk'],
  ['Lisp', 'Scheme'],
  ['SmallTalk', 'Self'],
  ['Scheme','JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'JavaScript'],
  ['Self', 'Lua']
];

var influences_cap = [
  ['LISP', 'SmallTalk'],
  ['LISP', 'Scheme'],
  ['SmallTalk', 'Self'],
  ['Scheme','JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'JavaScript'],
  ['Self', 'Lua']
];


describe('postDepth', function() {
  it("_.identity, influences を渡すとinfluencesのコピーが返る",function() {
    expect(sut.postDepth(_.identity,influences)).to.eql(influences);
  });

  it("_.identity, influences を渡すとinfluencesとは別のオブジェクトが返る",function() {
    expect(sut.postDepth(_.identity,influences)).not.to.be(influences);
  });

  it("influences中の'Lisp'を'LISP'に変換したオブジェクトを返す", function() {
    expect(sut.postDepth(function(x) {
      if (x === "Lisp")
        return "LISP";
      else 
        return x;
    }, influences)).to.eql(influences_cap);
  })

});

describe('influencedWithStrategy', function() {
  it("postDepth, 'Lisp', influencesを渡すと['SmallTalk', 'Scheme']が返る", function() {
    expect(sut.influencedWithStrategy(sut.postDepth, 'Lisp', influences))
    .to.contain('SmallTalk', 'Scheme');
  });
});