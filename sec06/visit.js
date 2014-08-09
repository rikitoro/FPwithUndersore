exports.visit = visit;

var _ = require('underscore');

function visit (mapFun, resultFun, array) {
  if (_.isArray(array))
    return resultFun(_.map(array, mapFun));
  else
    return resultFun(array);
}