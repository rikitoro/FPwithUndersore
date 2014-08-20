exports.doubleAll = doubleAll;
exports.average = average;
exports.onlyEven = onlyEven;

var _ = require('underscore');

function doubleAll(array) {
  return _.map(array, function (n) { return n * 2; });
}

function average(array) {
  var sum = _.reduce(array, function(sum, n) { return sum + n });
  return sum / _.size(array);
}

function onlyEven(array) {
  return _.filter(array, function(n) {
    return (n % 2) === 0;
  });
}

