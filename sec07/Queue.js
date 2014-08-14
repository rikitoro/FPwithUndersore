var cat = require('./cat.js').cat

function Queue (elems) {
  this._q = elems;
}

Queue.prototype = {
  enqueue: function(thing) {
    return new Queue(cat(this._q, [thing]));
  }
};

exports.Queue = Queue;
