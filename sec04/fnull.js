exports.fnull = fnull;
exports.defaults = defaults;

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

