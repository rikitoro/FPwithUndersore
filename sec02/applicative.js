var _ = require('underscore');
var p = console.log;

var nums = [1, 2, 3, 4, 5];

function doubleAll(array) {
  return _.map(array, function (n) { return n * 2; });
}

p ( doubleAll(nums) );


function average(array) {
  var sum = _.reduce(array, function(sum, n) { return sum + n });
  return sum / _.size(array);
}

p ( average(nums) );


function onlyEven(array) {
  return _.filter(array, function(n) {
    return (n % 2) === 0;
  });
}

p ( onlyEven(nums) );