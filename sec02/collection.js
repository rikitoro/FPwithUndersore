var _ = require('underscore');
var p = console.log;

p ( _.map({a: 1, b: 2}, _.identity) );
p ( _.map({a: 1, b: 2}, function(v, k) { return [k, v] }) );
p ( _.map({a: 1, b: 2}, function(v, k, coll) { return [k, v, _.keys(coll)] }) );

