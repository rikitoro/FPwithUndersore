exports.nexts = nexts;

var _ = require('underscore');


function nexts (graph, node) {
  if(_.isEmpty(graph)) return [];

  // utilities
  var second = _.compose(_.first, _.rest);
  var construct = require('./construct.js').construct;

  var pair = _.first(graph);
  var from = _.first(pair);
  var to = second(pair);
  var more = _.rest(graph);

  if(_.isEqual(node, from))
    return construct(to, nexts(more, node));
  else
    return nexts(more, node);
}

