var sut = require('../rightAwayInvoker.js');

var expect = require('expect.js');

describe('rightAwayInvoker',function() {
  it('関数とその関数の引数を渡すと即時に評価する',function() {
    expect(sut.rightAwayInvoker(Array.prototype.reverse, [1,2,3]))
    .to.eql([3,2,1]);
  });
});