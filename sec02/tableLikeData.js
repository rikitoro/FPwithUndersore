exports.project = project;
exports.rename = rename;
exports.as = as;
exports.restrict = restrict;

var _ = require('underscore');
var truthy = require('./truthy.js').truthy;
var construct = require('./construct').construct;

function project(table, keys) {
  return _.map(table, function(obj) {
    return _.pick.apply(null, construct(obj, keys));
  });
};

function rename(obj, newNames) {
  return _.reduce(newNames, function(o, nu, old) {
    if (_.has(obj, old)) {
      o[nu] = obj[old];
      return o;
    } else {
      return o;
    };
  }, _.omit.apply(null, construct(obj, _.keys(newNames))));
}

function as(table, newNames) {
  return _.map(table, function(obj) {
    return rename(obj, newNames)
  });
}


function restrict(table, pred) {
  return _.reduce(table, function(newTable, obj) {
    if (truthy(pred(obj)))
      return newTable;
    else
      return _.without(newTable, obj);
  }, table);
}
