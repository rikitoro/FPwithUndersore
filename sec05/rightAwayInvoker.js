exports.rightAwayInvoker = rightAwayInvoker;

var _ = require('underscore');
var invoker = require('./invoker.js').invoker

function rightAwayInvoker () {
  var args = _.toArray(arguments);
  var method = args.shift();
  var target = args.shift();

  return method.apply(target, args);
}
