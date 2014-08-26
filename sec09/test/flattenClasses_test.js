var sut = require('../flattenClasses.js');

var expect = require('expect.js');
var always = require('../invoker.js').always;
var note = require('../fail.js').note;
var construct = require('../construct.js').construct;
var _ = require('underscore');

describe('Container',function() {
  it('値を渡してインスタンスを生成すると渡した値を_valueプロパティに保持する',function() {
    expect(new sut.Container(42)).to.have.property('_value',42);
  });
});

describe('Hole',function() {
  it.skip('initをまだ実装していない場合、インスタンス生成時にエラーを投げる',function() {
    expect(function() {new sut.Hole(42)}).to.throwError();
  });
  it('initを実装した場合、インスタンス生成時にエラーは発生しない',function() {
    expect(function() {new sut.Hole(42)}).not.to.throwError();
  });
  it('値を渡してインスタンスを生成すると渡した値を_valueプロパティに保持する',function() {
    expect(new sut.Hole(108)).to.have.property('_value',108);
  });


  describe('setValue', function() {

    var isEven = function(n) { return n % 2 === 0; };
    it('常に失敗する検証関数を設定した場合はErrorを投げる',function() {
      var h = new sut.Hole(42);
      h.addValidator(always(false));
      expect(function() {h.setValue(9)}).to.throwError(/不正な値を設定しようとしました：9/);
    });
    it('偶数を受け付ける検証関数を設定した状態で偶数を渡すと渡した値を返す',function() {
      var h = new sut.Hole(42);
      h.addValidator(isEven);
      expect(h.setValue(24)).to.be(24);
    });
    it('偶数を受け付ける検証関数を設定した状態で奇数を渡すとErrorを投げる',function() {
      var h = new sut.Hole(42);
      h.addValidator(isEven);
      expect(function() {h.setValue(25)}).to.throwError(/不正な値を設定しようとしました：25/);
    });
    it('watcherを1つ設定した場合変更をコンソールに出力する',function() {
      var h = new sut.Hole(42);
      h.watch(function(old, nu) { note([old,"を",nu,"に変更"].join(''));});
      expect(h.setValue(10)).to.be(10);
    });

    it('watcherを追加した場合変更を2回コンソールに出力する',function() {
      var h = new sut.Hole(51);
      h.watch(function(old, nu) { note(["Veranderende", old,"tot",nu].join(''));});
      expect(h.setValue(10)).to.be(10);
    });
  });
  describe('snapshot',function() {
    it('値を渡してインスタンス生成した後snapshotを取るとインスタンス生成時に渡した値を返す',function() {
      var h = new sut.Hole(42);
      expect(h.snapshot()).to.be(42);
    });
    it('swapに関数を渡したのちsnapshotを取るとswapで評価した値を返す',function() {
      var h = new sut.Hole(42);
      h.swap(always(99));
      expect(h.snapshot()).to.be(99);
    });

  });

});

describe('SwapMixin',function() {
  it('#swapにconstructと配列を渡すと_valueフィールドと配列をつなげた配列を返す',function() {
    var o = {_value: 0, setValue: _.identity};
    _.extend(o, sut.SwapMixin);
    expect(o.swap(construct, [1,2,3])).to.eql([0,1,2,3]);
  });

});

describe('CAS',function() {
  describe('swap', function() {
    it('設定した値と同じ値を渡すと設定値を変更できる',function() {
      var c = new sut.CAS(42);
      c.swap(42, always(-1));
      expect(c.snapshot()).to.be(-1);
    });

    it('設定した値と異なる値を渡すと設定値は変更されない',function() {
      var c = new sut.CAS(108);
      c.swap('not the value', always(100000));
      expect(c.snapshot()).to.be(108);
    });


  });
});