
var _ = require('underscore');
var dispatch = require('./dispatch.js').dispatch;

var polyToString = dispatch(
  function(s) { return _.isString(s) ? s : undefined; },
  function(s) { return _.isArray(s) ? stringifyArray(s) : undefined; },
  function(s) { return _.isObject(s) ? JSON.stringify(s) : undefined; },
  function(s) { return s.toString(); }
  );

function stringifyArray (array) {
  return ["[", _.map(array, polyToString).join(","), "]"].join('');
}

exports.polyToString = polyToString;
