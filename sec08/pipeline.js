exports.pipeline = pipeline;
exports.fifth = fifth;

var _ = require('underscore');

function pipeline (seed /*, funs */) {
  return _.reduce(_.rest(arguments),
    function(l, r) { return r(l); },
    seed);
}

function fifth (a) {
  return pipeline(a, _.rest, _.rest, _.rest, _.rest, _.first);
}