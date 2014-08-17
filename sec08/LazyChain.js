var _ = require('underscore');

function LazyChain (obj) {
  this._calls = [];
  this._target = obj;
}

LazyChain.prototype.invoke = function(methodName /* args */) {
  var args = _.rest(arguments);

  this._calls.push(function(target) {
    var meth = target[methodName];
    return meth.apply(target, args);
  });

  return this;
}

LazyChain.prototype.force = function() {
  return _.reduce(this._calls, function(target, thunk) {
    return thunk(target);
  }, this._target);
};

exports.LazyChain = LazyChain;
