var _ = require('underscore');
var p = console.log;
var util = require('./nth.js');
var nth = util.nth;
var second = util.second;

function lameCSV(str) {
  return _.reduce(str.split("\n"), function(table, row) {
    table.push(_.map(row.split(","), function(c) { return c.trim() }));
    return table; 
  }, []);
};

var peopleTable = lameCSV("name, age, hair\nMerble, 35, red\nBob, 64, blonde");
p (peopleTable);
p (_.rest(peopleTable).sort());

function selectNames(table) {
  return _.rest(_.map(table, _.first));
}

function selectAges(table) {
  return _.rest(_.map(table, second));
}

function selectHairColor(table) {
  return _.rest(_.map(table, function (row) {
    return nth(row, 2);
  }))
}

var mergeResults = _.zip;

p (selectNames(peopleTable));
p (selectAges(peopleTable));
p (selectHairColor(peopleTable));
p (mergeResults(selectNames(peopleTable), selectAges(peopleTable)));