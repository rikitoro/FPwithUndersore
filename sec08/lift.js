exports.lift = lift;

var _ = require('underscore');
var construct = require('./construct.js').construct;

function lift (answerFun, stateFun) {
  return function(/* arguments */) {
    var args = _.toArray(arguments);

    return function(state) {
      var ans = answerFun.apply(null, construct(state, args));
      var s = stateFun ? stateFun(state) : ans;

      return { answer: ans, state: s};
    };
  };
}