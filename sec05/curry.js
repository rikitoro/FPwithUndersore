exports.curry = curry;
exports.curry2 = curry2;
exports.curry3 = curry3;

function curry (fun) {
  return function(arg) {
    return fun(arg);
  };
}

function curry2 (fun) {
  return function (secondArg) {
    return function (firstArg) {
      return fun(firstArg, secondArg);
    };
  };
}

function curry3 (fun) {
  return function(last) {
    return function(second) {
      return function(first) {
        return fun(first, second, last);
      };
    };
  };
}

