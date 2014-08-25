exports.dispatch = dispatch;

var _ = require('underscore');
var existy = require('./truthy.js').existy;
var construct = require('./construct.js').construct;

function dispatch (/* arguments */) {
  var funs = _.toArray(arguments);
  var size = funs.length;

  return function(target /*, args */) {
    var ret = undefined;
    var args = _.rest(arguments);
    for (var funIndex = 0; funIndex < size; funIndex++) {
      var fun = funs[funIndex];
      ret = fun.apply(fun, construct(target, args));
      if (existy(ret)) return ret;
    }

    return ret;
  };
}

