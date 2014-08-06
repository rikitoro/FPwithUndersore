var _ = require('underscore');

var zombie = {name: "Bub", film: "Day of the Dead"};

var p = console.log;
p(_.keys(zombie));
p(_.values(zombie));

var novels = [
  {title: "Chthon",   author: "Anthony"},
  {title: "Grendel",  author: "Gardner"},
  {title: "After Dark"}
];

p(_.pluck(novels, 'author'));

p(_.pairs(zombie));

p(
  _.object(_.map(_.pairs(zombie), function(pair) {
    return [pair[0].toUpperCase(), pair[1]];
  }))
);

p(_.invert(zombie));

p(_.keys(_.invert({a: 138, b: 9})));

p(
  _.pluck(_.map(novels, function(obj){
    return _.defaults(obj, {author: "UNKNOWN"});
  }), 'author')
);

////////////////////////////////////////////////////////
var person = {name: "Romy", token: "j3982ij", password: "tigress"};
var info = _.omit(person, 'token', 'password');
p(info);

var creds = _.pick(person, 'token', 'password');
p(creds);

var libraty = [
  {title: "SICP", isbn: "02347289423", ed: 1},
  {title: "SICP", isbn: "02347289356", ed: 2},
  {title: "Joy of Closure", isbn: "1234567890", ed: 1}
];

p(
  _.findWhere(libraty, {title: "SICP", ed: 2})
);

p(
  _.where(libraty, {title: "SICP"})
);

