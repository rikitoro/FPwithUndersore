exports.existy = existy;
exports.truthy = truthy;
exports.doWhen = doWhen;

var _ = require('underscore');

function existy (x) {
  return x != null;
}

function truthy(x) {
  return (x !== false) && existy(x)
}

function doWhen (cond, action) {
  if (truthy(cond))
    return action();
  else
    return undefined;
}

function executeIfHasField(target, name) {
  return doWhen(existy(target[name]), function() {
    var result = _.result(target, name);
    console.log(['結果は', result].join(''));
    return result;
  });
}
