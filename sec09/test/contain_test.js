var sut = require('../contain.js');

var expect = require('expect.js');
var always = require('../invoker.js').always;
var note = require('../fail.js').note;

describe('contain',function() {
  it('値を渡すとその値を_valueフィールドとするオブジェクトを返す',function() {
    expect(sut.contain(42)).to.eql({_value:42});
  });
});

describe('hole',function() {
  it('値と常に成功する検証関数を渡すと渡した値を_valueフィールドとするオブジェクトを返す',function() {
    expect(sut.hole(108, always(true))).to.have.property("_value", 108);
  });
  it('常に失敗する検証関数を渡すとErrorを投げる',function() {
    expect(function() {sut.hole(108, always(false))}).to.throwError(/不正な値を設定しようとしました：108/);
  });

});

describe('swap',function() {
  var sqr = function(x) { return x * x; };
  it('holeで返された値と関数を渡すと渡した関数を評価した値を返す',function() {
    var x = sut.hole(42);
    expect(sut.swap(x, sqr)).to.be(1764);
  });
});

describe('addWatcher', function() {
  var sqr = function(x) { return x * x; };
  it('watcherを設定後swapを実行するとwatcherに通知されコンソールに出力される',function() {
    var x = sut.hole(11);
    sut.addWatcher(x, note);
    expect(sut.swap(x, sqr)).to.be(121);
  });
});

describe('compareAndSwap',function() {
  var isOdd = function(n) { return n % 2 === 1; };
  it('設定値と同じ値と関数を渡すと、関数の評価値でオブジェクトが更新される',function() {
    var y = sut.cas(9, isOdd);
    sut.compareAndSwap(y, 9, always(1));
    expect(sut.snapshot(y)).to.be(1);
  });
});