exports.construct = construct;

var _ = require('underscore');
var existy = require('./truthy.js').existy;

function cat() {
  var head = _.first(arguments);
  if (existy(head))
    return head.concat.apply(head, _.rest(arguments));
  else
    return [];
}


function construct(head, tail) {
  return cat([head], _.toArray(tail))
}