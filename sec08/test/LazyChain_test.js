var sut = require('../LazyChain.js');

var expect = require('expect.js');

describe('LazyChain',function() {
  it.skip('invokeした後の_calls配列の内容を確認する', function() {
    expect(new sut.LazyChain([2,1,3]).invoke('sort')._calls)
    .to.eql([[Function]]);
  });

  it('invokeでサンクを追加しforceでサンクを実行させることができる',function() {
    expect(new sut.LazyChain([2,1,3]).invoke('sort').force())
    .to.eql([1,2,3]);
  });

  it('invokeで複数のサンクを追加してもforceでメソッドチェーンを実行させるtことができる', function() {
    expect(new sut.LazyChain([2,1,3])
      .invoke('concat', [8, 5, 7, 6])
      .invoke('sort')
      .invoke('join', ' ')
      .force())
    .to.eql("1 2 3 5 6 7 8");
  });

  it('明示的にforceメソッドで実行するまでLazyChainを保持できる', function() {
    var deferredSort = new sut.LazyChain([2,1,3]).invoke('sort');
    expect(deferredSort.force()).to.eql([1,2,3]);
  });

})

describe('LazyChainChainChain',function() {
  it('LazyChainを合成できる', function() {
    var deferredSort = new sut.LazyChainChainChain([2,1,3]).invoke('sort');
    expect(new sut.LazyChainChainChain(deferredSort)
      .invoke('toString')
      .force()).to.eql("1,2,3");
  });
});