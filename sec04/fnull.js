exports.fnull = fnull;

var _ = require('underscore');
var existy = require('./truthy.js').existy;

function fnull(fun /*, defaultValue1,,*/) {
  var defaults = _.rest(arguments);
  return function(/* arguments */) {
    var args = _.map(arguments, function(e, i) {
      return existy(e) ? e : defaults[i];
    });
    return fun.apply(null, args);
  };
}


function defaults(df) {
  return function(obj, key) {
    var val = fnull(_.identity, df[key]);
    return obj && val(obj[key]);
  };
}


////////////////////////////////////////////
// var nums = [1, 2, 3, null, 5];
var p = console.log;
// // p(_.reduce(nums, function(total, n) { return total * n; }));
// var safeMult = fnull(function(total, n) { return total * n}, 1, 1);
// p(_.reduce(nums, safeMult));

///////////////////////////////////////////////
// function doSomething(config) {
//   var lookup = defaults({critical: 108});
//   return lookup(config, 'critical');
// }

// p(doSomething({critical: 9}));
// p(doSomething({}));