var sut = require('../Container.js');

var expect = require('expect.js');

describe('Container', function() {
  it('コンストラクタに渡した初期値でコンテナの内容を初期化される', function() {
    var aNumber = new sut.Container(42);
    expect(aNumber).to.eql({_value: 42});
  })

  it('#updateに更新用関数を渡すとコンテナの内容が更新される', function() {
    var aNumber = new sut.Container(42);
    aNumber.update(function(n) { return n + 1});
    expect(aNumber).to.eql({_value: 43});
  });

  it('#updateには更新用関数と更新関数用の引数を渡すことができる', function() {
    var aNumber = new sut.Container(42);
    aNumber.update(function(n, a) { return n + a}, 10);
    expect(aNumber).to.eql({_value: 52});
  });

});