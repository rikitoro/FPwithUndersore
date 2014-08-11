var _ = require('underscore');

var second = _.compose(_.first, _.rest);
var secondTwice = _.compose(second, second);

var dissociativeIdentity = _.compose(_.identity, _.identity);

exports.second = second;
exports.secondTwice = secondTwice;
exports.dissociativeIdentity = dissociativeIdentity;