exports.influenced = influenced;

var _ = require('underscore');

var curry2 = require('./curry.js').curry2;
var groupFrom = curry2(_.groupBy)(_.first);
var second = _.compose(_.first, _.rest);

function influenced (graph, node) {
  return _.map(groupFrom(graph)[node], second);
}