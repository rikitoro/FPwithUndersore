var SafeQueue = require('./SafeQueue.js').SafeQueue;
var invoker = require('./invoker.js').invoker;
var _ = require('underscore');

function queue (/* arguments */) {
  return new SafeQueue(_.toArray(arguments));
}

var enqueue = invoker('enqueue', SafeQueue.prototype.enqueue);

exports.enqueue = enqueue;
exports.queue = queue;

