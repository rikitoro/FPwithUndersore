var sut = require('../dispatch.js');

var expect = require('expect.js');
var _ = require('underscore');
var invoker = require('../invoker.js').invoker;

describe('dispatch',function() {
  describe('2つのinvoker関数を受け取った場合', function() {
      var str = sut.dispatch(invoker('toString', Array.prototype.toString),
        invoker('toString', String.prototype.toString));
      it('引数が2つめのinvoker関数に適応するとき2つ目の関数を実行する',function() {
        expect(str("a")).to.eql("a");
      });
      it('引数が1つめのinvoker関数に適応するとき1つ目の関数を実行する',function() {
        expect(str(_.range(10))).to.eql("0,1,2,3,4,5,6,7,8,9");
      });
      it('引数がいずれのinvoker関数にも適応しないときはundefinedを返す',function() {
        expect(str(42)).to.be(undefined);
      });


  });
});