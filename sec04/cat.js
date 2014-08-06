exports.cat = cat;

var _ = require('underscore');
var existy = require('./truthy.js').existy;

function cat() {
  var head = _.first(arguments);
  if (existy(head))
    return head.concat.apply(head, _.rest(arguments));
  else
    return [];
}
