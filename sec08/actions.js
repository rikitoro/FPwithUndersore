exports.actions = actions;
exports.mSqr = mSqr;

var _ = require('underscore');
var cat = require('./cat.js').cat;
var existy = require('./truthy.js').existy;

function actions (acts, done) {
  return function(seed) {
    var init = { values: [], state: seed };

    var intermediate = _.reduce(acts, function(stateObj, action) {
      var result = action(stateObj.state);
      var values = cat(stateObj.values, [result.answer]);
      return { values: values, state: result.state }; 
    }, init);

    var keep = _.filter(intermediate.values, existy);

    return done(keep, intermediate.state);
  };
}

////////////////////////////////

var sqr = function(n) { return n * n; };

function mSqr () {
  return function(state) {
    var ans = sqr(state);
    return {answer: ans, state:ans};
  };
}