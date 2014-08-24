exports.lazyChain = lazyChain;

var _ = require('underscore');

function lazyChain (obj) {
  var calls = [];

  return {
    invoke: function(methodName /* args */) {
      var args = _.rest(arguments);
      calls.push(function(target) {
        var meth = target[methodName];
        return meth.apply(target, args);
      });
      return this;
    },
    force: function() {
      return _.reduce(calls, function(ret, thunk) {
        return thunk(ret);
      }, obj);
    }
  };
}