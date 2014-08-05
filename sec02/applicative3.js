var _ = require('underscore');
var existy = require('./truthy.js').existy;

function cat() {
  var head = _.first(arguments);
  if (existy(head))
    return head.concat.apply(head, _.rest(arguments));
  else
    return [];
}

////
var p = console.log;
p( cat([1, [2, 3]], [4, 5], [6, 7, 8]) );

///////////////////////////////////////
function construct(head, tail) {
  return cat([head], _.toArray(tail))
}

p ( construct(42, [1, 2, 3]) );
///////////////////////////////////////

function mapcat(fun, coll) {
  return cat.apply(null, _.map(coll, fun));
}

p ( mapcat(function(e){
  return construct(e, ["*", "**"])
}, [1, 2, 3]) );

///////////////////////////////////////
function butlast(coll) {
  return _.toArray(coll).slice(0, -1);
}

function interpose(inter, coll) {
  return butlast(mapcat(function (e) {
    return construct(e, [inter])
  }, coll));
}

p( interpose("*", [1,2,3]) );