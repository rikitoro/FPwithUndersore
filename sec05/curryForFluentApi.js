var checker =   require('./objectValidator.js').checker;
var validator = require('./objectValidator.js').validator;
var curry2 =    require('./curry.js').curry2;

var greaterThan = curry2(function(lhs, rhs) { return lhs > rhs; });
var lessThan =    curry2(function(lhs, rhs) { return lhs < rhs; });

var withinRange = checker(
  validator("10より大きい必要があります", greaterThan(10)),
  validator("20より小さい必要があります", lessThan(20))
  );

exports.withinRange = withinRange;

