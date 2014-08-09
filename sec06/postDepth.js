exports.postDepth = postDepth;
exports.influencedWithStrategy = influencedWithStrategy;

var _ = require('underscore');
var partial1 = require('./partial.js').partial1;
var visit = require('./visit.js').visit;

function postDepth (fun, ary) {
  return visit(partial1(postDepth, fun), fun, ary);
}

var second = _.compose(_.first, _.rest);

function influencedWithStrategy (strategy, lang, graph) {
  var results = [];

  strategy(function(x) {
    if (_.isArray(x) && _.first(x) == lang)
      results.push(second(x));

    return x;
  }, graph);

  return results;
}