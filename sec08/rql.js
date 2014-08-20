exports.firstEditions = firstEditions;
exports.allFirstEditions = allFirstEditions;

var curry2        = require('./curry.js').curry2;
var pipeline      = require('./pipeline.js').pipeline;
var tableLikeData = require('./tableLikeData.js');
var project       = tableLikeData.project;
var as            = tableLikeData.as;
var restrict      = tableLikeData.restrict;

function firstEditions (table) {
  return pipeline(table
    , function(t) { return as(t, {ed: 'edition'}); }
    , function(t) { return project(t, ['title', 'edition', 'isbn']); }
    , function(t) { return restrict(t, function(book) {
      return book.edition === 1;
    }); 
  });
}


var RQL = {
  select: curry2(project),
  as: curry2(as),
  where: curry2(restrict) 
};

function allFirstEditions (table) {
  return pipeline(table
    , RQL.as({ed: 'edition'})
    , RQL.select(['title', 'edition', 'isbn'])
    , RQL.where(function(book) { return book.edition === 1; })
    );
}

exports.RQL = RQL;