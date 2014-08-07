var _ = require('underscore');
var invoker = require('./invoker.js').invoker

function rightAwayInvoker () {
  var args = _.toArray(arguments);
  var method = args.shift();
  var target = args.shift();

  return method.apply(target, args);
}

////
var p = console.log;
p(rightAwayInvoker(Array.prototype.reverse, [1,2,3]));

///
p(invoker('reverse', Array.prototype.reverse)([1,2,3]));