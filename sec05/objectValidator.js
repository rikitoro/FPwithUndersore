exports.checker = checker;
exports.validator = validator;
exports.hasKeys = hasKeys;
var _ = require('underscore');
var cat = require('./cat.js').cat;

function checker(/* 検証関数 */) {
  var validators = _.toArray(arguments);
  return function(obj) {
    return _.reduce(validators, function(errs, check) {
      if (check(obj))
        return errs;
      else
        return _.chain(errs).push(check.message).value();
    }, [])
  };
}

function validator(message, fun) {
  var f = function(/* args */) {
    return fun.apply(fun, arguments);
  };
  f['message'] = message;
  return f;
}

function aMap(obj) {
  return _.isObject(obj);
}

function hasKeys(/* arguments */) {
  var keys = _.toArray(arguments);

  var fun = function(obj) {
    return _.every(keys, function(k) {
      return _.has(obj, k);
    });
  };

  fun.message = cat(["これらのキーが存在する必要があります："], keys).join(" ");
  return fun;
}

// //////////////////////////////////////////////
// var p = console.log;
// var always = require('./invoker.js').always;
// var alwaysPasses = checker(always(true), always(true));
// p(alwaysPasses({}));

// var fails = always(false);
// fails.message = "人生における過ち";
// var alwaysFails = checker(fails);
// p(alwaysFails({}));

// var gonnaFail = checker(validator("ZOMG!", always(false)));
// p(gonnaFail(100));

// var checkCommand = checker(validator("マップデータである必要があります", aMap));
// p(checkCommand({}));
// p(checkCommand(42));

// var checkCommand2 = checker(validator("マップデータである必要があります", aMap),
//   hasKeys('msg', 'type'));
// p(checkCommand2({}));
// p(checkCommand2(42));
// p(checkCommand2({hoge: "HOGE", type: "NEW", msg: "my message"}));

