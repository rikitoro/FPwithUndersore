exports.parseAge = parseAge;

var _ = require('underscore');

var util = require('./fail.js');
var fail = util.fail;
var note = util.note;
var warn = util.warn;

function parseAge(age) {
  
  if (!_.isString(age)) fail("引数は文字列である必要があります。");

  var a;

  note("age を数値に変換しようとしています。");

  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    warn(["age を数値に変換できませんでした：", age].join(''));
    a = 0;
  }
  
  return a;
}

console.log(parseAge("frob"));