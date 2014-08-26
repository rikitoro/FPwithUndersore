exports.contain = contain;
exports.hole = hole;
exports.cas = cas;
exports.snapshot = snapshot;
exports.addWatcher = addWatcher;

var Container = require('./flattenClasses.js').Container;
var Hole = require('./flattenClasses.js').Hole;
var CAS = require('./flattenClasses.js').CAS;

var _ = require('underscore');
var invoker = require('./invoker.js').invoker;

function contain (value) {
  return new Container(value)
}

function hole (val /*, 検証関数 */) {
  var h = new Hole();
  var v = _.toArray(arguments)[1];

  if (v) h.addValidator(v);
  h.setValue(val);
  return h;
}

var swap = invoker('swap', Hole.prototype.swap);

function cas (val /*, args */) {
  var h = hole.apply(this, arguments);
  var c = new CAS(val);
  c._validator = h._validator;
  return c;
}

var compareAndSwap = invoker('swap', CAS.prototype.swap);

function snapshot (o) {
  return o.snapshot();
}

function addWatcher (o, fun) {
  o.watch(fun);
}

////
exports.swap = swap;
exports.compareAndSwap = compareAndSwap;