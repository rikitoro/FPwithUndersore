exports.unzip = unzip;
exports.constructPair = constructPair;

var _ = require('underscore');
var construct = require('./construct.js').construct;

function unzip (pairs) {
  if(_.isEmpty(pairs))
    return [[],[]];
  else
    return constructPair(_.first(pairs), unzip(_.rest(pairs)));
}

var second = _.compose(_.first,_.rest);

function constructPair (pair, rests) {
  return [construct(_.first(pair), _.first(rests)),
    construct(second(pair), second(rests))];
}