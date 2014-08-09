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
