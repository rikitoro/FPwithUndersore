var sut = require('../makeAdder.js');

var expect = require('expect.js');

describe('makeAdder', function() {
  it('定数を渡すと、渡された定数と引数とを加算する関数を返す', function() {
    var add100 = sut.makeAdder(100);
    expect(add100(42)).to.be(142);
  });
});