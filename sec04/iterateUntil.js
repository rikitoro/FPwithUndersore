var _ = require('underscore');

function repeat (times, value) {
  return _.map(_.range(times), function() { return value; });
}

function repeatedly(times, fun) {
  return _.map(_.range(times), fun);
}

function iterateUntil(fun, check, init) {
  var ret = [];
  var result = fun(init);
  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }
  return ret;
}

/////////////////////////////////////////////////////
var p = console.log;
p(repeat(4, "Major"));
p(repeatedly(3, function() {
  return Math.floor((Math.random()*10) + 1);
}));
p(repeatedly(3, function() { return "Odelay!"; }));

p(
  repeatedly(3, function(n) {
    var id = 'id' + n;
    // $('body').appends($("<p>Odelay!</p>").attr('id',id)) // need jQuery
    return id;
  })
)

p(
  iterateUntil(function(n) { return n + n; },
    function(n) { return n <= 1024;},
    1)
);