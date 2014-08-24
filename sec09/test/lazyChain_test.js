var sut = require('../lazyChain.js');

var expect = require('expect.js');

describe('lazyChain',function() {
  it('配列オブジェクトを渡し、invokeでconcat, sortのサンクを追加した後forceで遅延実行できる',function() {
    var lazyOp = sut.lazyChain([2,1,3])
      .invoke('concat', [7,7,8,9,0])
      .invoke('sort');
    expect(lazyOp.force()).to.eql([0,1,2,3,7,7,8,9])
  });
});