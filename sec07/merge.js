exports.merge = merge;

var _ = require('underscore');
var construct = require('./construct.js').construct;

function merge (/* objcts */) {
  return _.extend.apply(null, construct({}, arguments));
}