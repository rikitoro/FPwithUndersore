var _ = require('underscore');
var invoker = require('./invoker.js').invoker;
var always = require('./invoker.js').always;
var dispatch = require('./dispatch.js').dispatch;

function stringReverse (s) {
  if (!_.isString(s)) return undefined;

  return s.split('').reverse().join('');
}

var polyrev = dispatch(invoker('reverse', Array.prototype.reverse),
  stringReverse);

var sillyReverse = dispatch(polyrev, always(42));

exports.stringReverse = stringReverse;
exports.polyrev = polyrev;
exports.sillyReverse = sillyReverse;