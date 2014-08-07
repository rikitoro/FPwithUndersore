exports.partial1 = partial1;
exports.partial2 = partial2;
exports.partial  = partial;

var construct = require('./construct.js').construct;
var cat       = require('./construct.js').cat;
var _         = require('underscore');


function partial1 (fun, arg1) {
  return function(/* arguments */) {
    var args = construct(arg1, arguments);
    return fun.apply(fun, args);
  };
}

function partial2 (fun, arg1, arg2) {
  return function(/* arguments */) {
    var args = cat([arg1, arg2], _.toArray(arguments));
    return fun.apply(fun, args);
  };
}

function partial (fun /*, pargs */) {
  var pargs = _.rest(arguments);

  return function(/* arguments */) {
    var args = cat(pargs, _.toArray(arguments));
    return fun.apply(fun, args);
  };
}

// /////////////////////////////////////
// var p = console.log;

// function div (n, d) {
//   return n / d;
// }

// function sum3 (a, b, c) {
//   return a + b + c;
// }

// var over10Part1 = partial1(div, 10);
// p(over10Part1(5));

// var div10By2 = partial2(div, 10, 2);
// p(div10By2());

// var add13 = partial2(sum3, 10, 3);
// p(add13(4));

// var over10partial = partial(div, 10);
// p(over10partial(2));