var _ = require('underscore');
var validator = require('./objectValidator.js').validator;
var hasKeys   = require('./objectValidator.js').hasKeys;
var mapcat    = require('./cat.js').mapcat;
var partial1  = require('./partialApplication.js').partial1;
var partial   = require('./partialApplication.js').partial;


//////////////////////////////////
var p = console.log;

function aMap(obj) {
  return _.isObject(obj);
}

//p(validator("引数はマップデータである必要があります", aMap)(42));

/////////////////

var zero = validator("0ではいけません", function(n) { return 0 === n; });
var number = validator("引数は数値である必要があります", _.isNumber);

function sqr (n) {
  if (!number(n)) throw new Error(number.message);
  if (zero(n))    throw new Error(zero.message);
  return n * n;
}

//p(sqr(10));
//p(sqr(0));
//p(sqr(''));

function condition1 (/* validators */) {
  var validators = _.toArray(arguments);

  return function(fun, arg) {
    var errors = mapcat(function(isValid) {
      return isValid(arg) ? [] : [isValid.message]
    }, validators);

    if (!_.isEmpty(errors))
      throw new Error(errors.join(", "));

    return fun(arg);
  };
}

function complement (pred) {
  return function() {
    return !pred.apply(null, _.toArray(arguments));
  };
}

var sqrPre = condition1(
  validator("0ではいけません", complement(zero)),
  validator("引数は数値である必要があります。", _.isNumber)
  );

//p(sqrPre(_.identity, 10));
//p(sqrPre(_.identity, ''));
//p(sqrPre(_.identity, 0));

function uncheckedSqr (n) {
  return n * n;
}

//p(uncheckedSqr(''));

var checkedSqr = partial1(sqrPre, uncheckedSqr);
//p(checkedSqr(0));
//p(checkedSqr(''));

function isEven (n) {
  return (n % 2) === 0;
}

var sillySquare = partial1(
  condition1(validator("偶数を入力してください", isEven)),
  checkedSqr
  );

//p(sillySquare(10));
//p(sillySquare(11));
//p(sillySquare(''));
//p(sillySquare(0));

////////////////////////////////////

var validateCommand = condition1(
  validator("マップデータである必要があります", _.isObject),
  validator("設定オブジェクトは正しいキーを持っている必要があります",
    hasKeys('msg', 'type'))
  );

var createCommand = partial(validateCommand, _.identity);
//p(createCommand(21));
//p(createCommand({msg: "", type: ""}));

var createLaunchCommand = partial1(
  condition1(
    validator("設定オブジェクトにはcountDownプロパティが必要です",
      hasKeys('countDown'))),
  createCommand
  );

//p(createLaunchCommand({msg: "", type: ""}));
//p(createLaunchCommand({msg: "", type: "", countDown: 20}));
//p(createLaunchCommand({type: "", countDown: 20}));
