exports.lameCSV         = lameCSV;
exports.selectNames     = selectNames;
exports.selectAges      = selectAges;
exports.selectHairColor = selectHairColor;

var _      = require('underscore');
var nth    = require('./nth.js').nth;
var second = require('./nth.js').second;

function lameCSV(str) {
  return _.reduce(str.split("\n"), function(table, row) {
    table.push(_.map(row.split(","), function(c) { return c.trim() }));
    return table; 
  }, []);
};


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

