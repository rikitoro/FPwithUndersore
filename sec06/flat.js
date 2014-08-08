exports.flat = flat;

var _ = require('underscore');
var cat = require('./cat.js').cat;

function flat (array) {
  if (_.isArray(array))
    return cat.apply(cat, _.map(array, flat));
  else
    return [array];
}