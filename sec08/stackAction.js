var _ = require('underscore');
var lift      = require('./lift.js').lift;
var actions   = require('./actions.js').actions;
var construct = require('./construct.js').construct;

var push = lift(function(stack, e) { return construct(e, stack)});
var pop  = lift(_.first, _.rest); 

var stackAction = actions([
  push(1),
  push(2),
  pop(),
  push(3)],
  function(values, state) { return values; });

exports.stackAction = stackAction;