var _ = require('underscore');

function plucker(field) {
  return function(obj) {
    return (obj && obj[field]);
  };
}

var p = console.log;
p(_.max([1,2,3,4,5]));

var people = [{name: "Fred", age: 65}, {name: "Lucy", age: 36}];
p(_.max(people, function(p) { return p.age }));

function finder(valueFun, bestFun, coll) {
  return _.reduce(coll, function(best, current) {
    var bestValue = valueFun(best);
    var currentValue = valueFun(current);
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
  });
}

p(finder(_.identity, Math.max, [1,2,3,4,5]));
p(finder(plucker('age'), Math.max, people));
// p(finder(plucker('age'), Math.min, people));
p(finder(plucker('name'), 
  function(x, y) { return (x.charAt(0) === "L") ? x : y; },
  people)
);

function best(fun, coll) {
  return _.reduce(coll, function(x, y) {
    return fun(x, y) ? x : y;
  });
}

p(best(function(x, y) { return x < y }, [1,2,3,4,5]));
p(best(function(x, y) { return (x.name.charAt(0) === "L") }, people));
