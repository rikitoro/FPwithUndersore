var _ = require('underscore');
var construct = require('./construct.js').construct;
var polyToString = require('./polyToString.js').polyToString;
function Container (init) {
  this._value = init;
}

Container.prototype = {
  update: function(fun /*, args */) {
    var args = _.rest(arguments);
    var oldValue = this._value;
    this._value = fun.apply(this, construct(oldValue, args));
    return this._value;
  }
};

Container.prototype.toString = function() {
  return [ "@<", polyToString(this._value), ">"].join('');
};

exports.Container = Container;
