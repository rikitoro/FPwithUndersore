exports.repeat = repeat;
exports.repeatedly = repeatedly;
exports.iterateUntil = iterateUntil;

var _ = require('underscore');

function repeat (times, value) {
  return _.map(_.range(times), function() { return value; });
}

function repeatedly(times, fun) {
  return _.map(_.range(times), fun);
}

function iterateUntil(fun, check, init) {
  var ret = [];
  var result = fun(init);
  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }
  return ret;
}
