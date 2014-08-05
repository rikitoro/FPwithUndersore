var p = console.log;
var _ = require('underscore')

p ([2, 3, -6, 0, -108, 42].sort());
p ([2, 3, -1, -6, 0, -108, 42, 10].sort());
p ([2, 3, -1, -6, 0, -108, 42, 10].sort(function (x, y) {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}));

var compareLessThanOrEqual = function(x, y) {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}
p ([2, 3, -1, -6, 0, -108, 42, 10].sort(compareLessThanOrEqual));

if (compareLessThanOrEqual(1, 1)) p("同じか小さいa");
if (_.contains([0, -1], compareLessThanOrEqual(1, 1))) p("同じか小さいb");

var lessOrEqual = function(x, y) {
  return x <= y;
}
p ([2, 3, -1, -6, 0, -108, 42, 10].sort(lessOrEqual));

var existy = function (x) {
  return x !== null
};

var truthy = function (x) {
  return (x !== false) && existy(x);
};

var comparator = function (pred) {
  return function(x, y) {
    if (truthy(pred(x, y)))
      return -1;
    else if (truthy(pred(y, x)))
      return 1;
    else
      return 0;
  };
}

p ([2, 3, -1, -6, 0, -108, 42, 10].sort(comparator(lessOrEqual)));
