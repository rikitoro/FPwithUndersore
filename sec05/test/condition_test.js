var sut = require('../condition.js');

var expect = require('expect.js');
var _ = require('underscore');
var validator = require('../objectValidator.js').validator;
var partial = require('../partial.js').partial;

describe('condition1', function() {
  // validators
  var notzero = validator("0ではいけません", function(n) { return 0 !== n; });
  var number = validator("引数は数値である必要があります", _.isNumber);

  // unchecked function
  var sqr = function(n) { return n * n };

  // test case
  describe('validatorを2つ渡した場合',function() {
    var preCondition = sut.condition1(notzero, number);
    it('両方のvalidatorをパスする引数の値では渡された関数を評価した値を返す',function() {
      expect(preCondition(sqr, 10)).to.be(100);
    });

    it('両方のvalidatorをパスする引数の値では渡された関数を評価した値を返す',function() {
      expect(preCondition(sqr, 10)).to.be(100);
    });

    it('1つ目のvalidatorをパスしない場合は1つ目のvalidatorに渡したメッセージで例外を投げる',function() {
      expect(function() {preCondition(sqr, 0)}).to.throwError("0ではいけません");
    });

    it('2つ目のvalidatorをパスしない場合は2つ目のvalidatorに渡したメッセージで例外を投げる',function() {
      expect(function() {preCondition(sqr, 'abc')}).to.throwError("引数は数値である必要があります。");
    });
  });

  describe('事前条件と事後条件を付与した関数を生成できる',function() {
    var preCondition = sut.condition1(notzero, number);
    var postCondition = sut.condition1(
      validator("結果は数値である必要があります", _.isNumber),
      validator("結果はゼロでない必要があります", function(n) { return 0 !== n; }),
      validator("結果は正の数である必要があります", function(n) { return n > 0; })
      );
    var checkedFunc = _.compose(partial(postCondition, _.identity),
      partial(preCondition, sqr));
    it('有効な値の場合関数を評価する',function() {
      expect(checkedFunc(10)).to.be(100);
    });
    it('有効な値の場合関数を評価する',function() {
      expect(checkedFunc(-10)).to.be(100);
    });
  
    it('事前条件をパスしない場合は事前条件のvalidatorに設定したメッセージで例外を投げる',function() {
      expect(function() {checkedFunc(0);}).to.throwError();
    });

    it('事後条件をパスしない場合は事後条件のvalidatorに設定したメッセージで例外を投げる',function() {
      expect(function() {checkedFunc(NaN);}).to.throwError();
    });



  });
});