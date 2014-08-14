var sut = require('../Queue.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('Queue', function() {
  var seed = [1, 2, 3];
  var q = new sut.Queue(seed);

  it('インスタンス生成時に渡されたシード値が_qフィールドに設定される', function() {
    expect(q._q).to.eql([1, 2, 3]);
  });

  it('enqueueで新しい要素を追加した新しいインスタンスが返される', function() {
    var q2 = q.enqueue(108);
    expect(q2._q).to.eql([1, 2, 3, 108]);
  });

  it('enqueueを行なっても元のオブジェクトは不変である', function() {
    var q2 = q.enqueue(108);
    expect(q._q).to.eql([1, 2, 3]);
  });

  it('インスタンス生成時に渡したシード値を変更すると_qも変わってしまう', function() {
    seed.push(1000);
    expect(q._q).to.eql([1, 2, 3, 1000]);
  });

});
