var sut = require('../uniqueString');

var expect = require('expect.js');

describe('makeUniqueStringFunction(start)',function() {
  it('startを連番の初期値として、プリフィクスを受け取って連番をつける関数を返す', function() {
    var uniqueString = sut.makeUniqueStringFunction(100);
    expect([uniqueString("hoge"), uniqueString("fuga"), uniqueString("fuga")])
    .to.eql(["hoge100", "fuga101", "fuga102"]);
  });
});