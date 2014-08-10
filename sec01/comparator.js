exports.compareLessThanOrEqual = compareLessThanOrEqual;
exports.lessOrEqual = lessOrEqual;
exports.comparator = comparator;

var _ = require('underscore')
var truthy = require('./truthy.js').truthy;

function compareLessThanOrEqual(x, y) {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}

function lessOrEqual(x, y) {
  return x <= y;
}

function comparator(pred) {
  return function(x, y) {
    if (truthy(pred(x, y)))
      return -1;
    else if (truthy(pred(y, x)))
      return 1;
    else
      return 0;
  };
}

