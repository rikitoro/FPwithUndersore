var dispatch = require('./dispatch.js').dispatch;

/////////////////////////////////////////////////

var _ = require('underscore');
var existy = require('./truthy.js').existy;
var construct = require('./construct.js').construct;
var invoker = require('./invoker.js').invoker;
var always = require('./invoker.js').always;

var p = console.log;



var str = dispatch(invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString));

p(str("abc"));
p(str(_.range(10))); 
p(str({}));

function stringReverse(s) {
  if (!_.isString(s)) return undefined;

  return s.split('').reverse().join('');
}

p(stringReverse("abc"));
p(stringReverse(1));

var polyrev = dispatch(
  invoker('reverse', Array.prototype.reverse),
  stringReverse);

p(polyrev([1,2,3]));
p(polyrev("abc"));
p(polyrev(42));

var sillyReverse = dispatch(polyrev, always(42));
p(sillyReverse([5,6,7]));
p(sillyReverse("hij"));
p(sillyReverse({piyo: "hoge"}));