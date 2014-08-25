var _ = require('underscore');
var validator = require('./objectValidator.js').validator;
var hasKeys   = require('./objectValidator.js').hasKeys;
var mapcat    = require('./cat.js').mapcat;
var cat       = require('./cat.js').cat;
var partial1  = require('./partialApplication.js').partial1;
var partial   = require('./partialApplication.js').partial;
var curry2    = require('./curry.js').curry2;

//////////////////////////////////
var p = console.log;

function aMap(obj) {
  return _.isObject(obj);
}

//p(validator("引数はマップデータである必要があります", aMap)(42));

/////////////////

// var zero = validator("0ではいけません", function(n) { return 0 === n; });
// var number = validator("引数は数値である必要があります", _.isNumber);

// function sqr (n) {
//   if (!number(n)) throw new Error(number.message);
//   if (zero(n))    throw new Error(zero.message);
//   return n * n;
// }

//p(sqr(10));
//p(sqr(0));
//p(sqr(''));

// function condition1 (/* validators */) {
//   var validators = _.toArray(arguments);

//   return function(fun, arg) {
//     var errors = mapcat(function(isValid) {
//       return isValid(arg) ? [] : [isValid.message]
//     }, validators);

//     if (!_.isEmpty(errors))
//       throw new Error(errors.join(", "));

//     return fun(arg);
//   };
// }
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

////////////////////////////

// function isntString(str) {
//   return !_.isString(str);
// }
//var isntString = _.compose(function(x) { return !x; }, _.isString);
function not (x) {
  return !x;
}

var isntString = _.compose(not, _.isString);

//p(isntString(1));


///////////////////////////////////////////
function splat (fun) {
  return function(array) {
    return fun.apply(null, array);
  };
}

var composedMapcat = _.compose(splat(cat), _.map);

//p(composedMapcat([[1,2],[3,4],[5]], _.identity));


/////////////////////////////////////////////

