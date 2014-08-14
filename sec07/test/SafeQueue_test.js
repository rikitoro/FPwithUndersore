var sut = require('../SafeQueue.js');

var expect = require('expect.js');

describe('SafeQueue', function() {
  var seed = [1, 2, 3];
  var q = new sut.SafeQueue(seed);

  it('enqueueで新しい要素を追加した新しいインスタンスが返される', function() {
    var q2 = q.enqueue(108);
    expect(q2._q).to.eql([1, 2, 3, 108]);
  });

  it('enqueueを行なっても元のオブジェクトは不変である', function() {
    var q2 = q.enqueue(108);
    expect(q._q).to.eql([1, 2, 3]);
  });

  it('インスタンス生成時に渡したシード値をしても元のオブジェクトは不変である', function() {
    seed.push(1000);
    expect(q._q).to.eql([1, 2, 3]);
  });

  it('_qフィールドを変更するとオブジェクトも変わってしまう', function() {
    q._q.push(-1111);
    expect(q).to.eql(new sut.SafeQueue([1, 2, 3, -1111]));
  });

  it('SafeQueue.prototype.enqueueも置き換えてしまえる', function() {
    sut.SafeQueue.prototype.enqueue = function(x) { return x * x; };
    expect(q.enqueue(42)).to.eql(1764);
  });


});
