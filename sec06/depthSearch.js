exports.depthSearch = depthSearch;

var _ = require('underscore');
var cat       = require('./cat.js').cat;
var construct = require('./construct.js').construct;
var nexts     = require('./nexts.js').nexts;


function depthSearch (graph, nodes, seen) {
  if (_.isEmpty(nodes)) return seen;

  var node = _.first(nodes);
  var more = _.rest(nodes);

  if (_.contains(seen, node))
    return depthSearch(graph, more, seen);
  else
    return depthSearch(graph,
      cat(nexts(graph, node), more),
      construct(node, seen));
}