var sut = require('../fnull.js');

var expect = require('expect.js');
var _ = require('underscore');

var mult = function(n, m) { return m * n; };
var nums = [undefined, 2, 3, null, 5];

describe('fnull', function() {
  var safeMult = sut.fnull(mult, 1, 1);

  it('引数がnullの場合に対してデフォルト値を使う関数を返す',function() {
    expect(safeMult(null, 2)).to.be(2);
  });

  it('引数がundefinedの場合に対してデフォルト値を使う関数を返す',function() {
    expect(safeMult(3, undefined)).to.be(3);
  });

  it('reduceに渡すこともできる', function() {
    expect(_.reduce(nums, safeMult)).to.be(30);
  });
});

describe('defaults', function() {
    var doSomething = function(config) {
      var lookup = sut.defaults({critical: 108});
      return lookup(config, 'critical');
    };

  it('指定したkey-valueペアがオブジェクトにない場合デフォルト値を追加できる',function() {
    expect(doSomething({hoge: 12})).to.be(108);
  });

  it('指定したkey-valueペアがオブジェクトにある場合デフォルト値は無視される',function() {
    expect(doSomething({hoge: 12, critical: 9})).to.be(9);
  });

});