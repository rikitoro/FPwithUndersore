var _ = require('underscore');
var cat = require('./cat.js').cat;

var SafeQueue = function (elems) {
  this._q = _.clone(elems);
};

SafeQueue.prototype = {
  enqueue: function(thing) {
    return new SafeQueue(cat(this._q, [thing]))
  }
};

exports.SafeQueue = SafeQueue;