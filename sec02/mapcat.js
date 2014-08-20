exports.cat = cat;
exports.mapcat = mapcat;
exports.interpose = interpose;

var _ = require('underscore');
var existy = require('./truthy.js').existy;
var construct = require('./construct.js').construct;

function cat() {
  var head = _.first(arguments);
  if (existy(head))
    return head.concat.apply(head, _.rest(arguments));
  else
    return [];
}

function mapcat(fun, coll) {
  return cat.apply(null, _.map(coll, fun));
}

function butlast(coll) {
  return _.toArray(coll).slice(0, -1);
}

function interpose(inter, coll) {
  return butlast(mapcat(function (e) {
    return construct(e, [inter])
  }, coll));
}

