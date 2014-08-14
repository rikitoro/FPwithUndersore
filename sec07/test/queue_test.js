var sut = require('../queue.js');

var expect = require('expect.js');

describe('queue', function() {
  it('引数に与えた複数の値でqueueを作成する',function() {
    expect(sut.queue(1,2,3)).to.eql({_q: [1,2,3]});
  });
});

describe('enqueue', function() {
  var q = sut.queue(1,2,3)
  it('引数にqueueと値を渡すとqueueに値を追加した新しいオブジェクトを返す',function() {
    expect(sut.enqueue(q, 42)).to.eql({_q: [1,2,3, 42]});
  });
});

