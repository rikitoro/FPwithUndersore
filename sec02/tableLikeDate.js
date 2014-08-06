var _ = require('underscore');
var truthy = require('./truthy.js').truthy;
var construct = require('./construct').construct;

var libraty = [
  {title: "SICP", isbn: "02347289423", ed: 1},
  {title: "SICP", isbn: "02347289356", ed: 2},
  {title: "Joy of Closure", isbn: "1234567890", ed: 1}
];

function project(table, keys) {
  return _.map(table, function(obj) {
    return _.pick.apply(null, construct(obj, keys));
  });
};

var p = console.log;
p(_.pluck(libraty, 'title'));

var editionResults = project(libraty, ['title', 'isbn']);

p(editionResults);
p(project(libraty, ['title']));

var isbnResults = project(libraty, ['isbn']);
p(isbnResults);
p(_.pluck(isbnResults, 'isbn'));

function rename(obj, newNames) {
  return _.reduce(newNames, function(o, nu, old) {
    if (_.has(obj, old)) {
      o[nu] = obj[old];
      return o;
    } else {
      return o;
    };
  }, _.omit.apply(null, construct(obj, _.keys(newNames))));
}

p(rename({a: 1, b: 2}, {'a': 'AAA'}));

function as(table, newNames) {
  return _.map(table, function(obj) {
    return rename(obj, newNames)
  });
}

p(as(libraty, {ed: 'edition'}));

p(
  project(as(libraty, {ed: 'edition'}), ['edition'])
);

function restrict(table, pred) {
  return _.reduce(table, function(newTable, obj) {
    if (truthy(pred(obj)))
      return newTable;
    else
      return _.without(newTable, obj);
  }, table);
}

p(
  restrict(libraty, function(book) {
    return book.ed > 1;
  })
);

p(
  restrict(
    project(
      as(libraty, {ed: 'EDITION'}),
      ['title', 'isbn', 'EDITION']),
    function(book) {
      return book.EDITION < 2;
    }
  )
);