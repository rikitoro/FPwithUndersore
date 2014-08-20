exports.always = always;
exports.invoker = invoker;

var _ = require('underscore');
var existy = require('./truthy.js').existy;
var doWhen = require('./truthy.js').doWhen;
var fail = require('./fail.js').fail;

function always(value) {
  return function() {
    return value;
  }
}

function invoker(name, method) {
  return function(target /*, args */) {
    if (!existy(target)) fail("Must provide a target");

    var targetMethod = target[name];
    var args = _.rest(arguments);

    return doWhen((existy(targetMethod) && method === targetMethod),
      function() {
        return targetMethod.apply(target, args);
      });
  };
}

var rev = invoker('reverse', Array.prototype.reverse);

exports.rev = rev;