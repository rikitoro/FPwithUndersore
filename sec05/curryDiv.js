// var _ = require('underscore');

function leftCurryDiv (n) {
  return function(d) {
    return n/d;
  };
}

function rightCurreyDiv(d) {
  return function(n) {
    return n/d;
  };
}

var divide10By = leftCurryDiv(10);

var p = console.log;
p(divide10By(2));

var divideBy10 = rightCurreyDiv(10);
p(divideBy10(2));