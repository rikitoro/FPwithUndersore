exports.plucker = plucker;
exports.finder = finder;
exports.best = best;

var _ = require('underscore');

function plucker(field) {
  return function(obj) {
    return (obj && obj[field]);
  };
}


function finder(valueFun, bestFun, coll) {
  return _.reduce(coll, function(best, current) {
    var bestValue = valueFun(best);
    var currentValue = valueFun(current);
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
  });
}

function best(fun, coll) {
  return _.reduce(coll, function(x, y) {
    return fun(x, y) ? x : y;
  });
}
