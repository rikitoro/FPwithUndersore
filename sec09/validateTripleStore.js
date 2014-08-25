var _ = require('underscore');

var validator = require('./objectValidator.js').validator;
var condition1 = require('./condition.js').condition1;
var partial1 = require('./partial.js').partial1;

var validateTriples = validator(
  "それぞれの配列は3つの要素を持っている必要があります",
  function(arrays) {
    return _.every(arrays, function(a) { return a.length === 3;});
  });

var validateTripleStore = partial1(
  condition1(validateTriples),
  _.identity);


//console.log(validateTripleStore([[2,1,3],[7,7,1],[0,9,5]]));
exports.validateTripleStore = validateTripleStore;