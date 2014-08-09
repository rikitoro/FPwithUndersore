exports.evenOline = evenOline;
exports.oddOline = oddOline;
exports.trampoline = trampoline;
exports.isEvenSafe = isEvenSafe;
exports.isOddSafe = isOddSafe;

var _ = require('underscore');
var partial1 = require('./partial').partial1;

function evenOline (n) {
  if (n === 0)
    return true;
  else
    return partial1(oddOline, Math.abs(n) - 1);
}

function oddOline (n) {
  if (n === 0)
    return false;
  else
    return partial1(evenOline, Math.abs(n) - 1);
}

function trampoline (fun /* , args */) {
  var result = fun.apply(fun, _.rest(arguments));

  while(_.isFunction(result)) {
    result = result();
  }

  return result;
}

function isEvenSafe (n) {
  if (n === 0)
    return true;
  else
    return trampoline(partial1(oddOline, Math.abs(n) - 1));
}

function isOddSafe (n) {
  if (n === 0)
    return false;
  else
    return trampoline(partial1(evenOline, Math.abs(n) - 1));
}
