exports.nth = nth;
exports.second = second;


var _ = require('underscore');
var util = require('./fail.js');
var p = console.log

var letters = ['a', 'b', 'c'];


function nativeNth(a, index) {
  return a[index];
}

function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

function nth(a, index) {
  if (!_.isNumber(index)) util.fail("インデックスは数値である必要があります。");
  if (!isIndexed(a)) util.fail("インデックス指定可能でないデータ型はサポートされていません。");
  if ((index < 0) || (index > a.length -1 )) util.fail("指定されたインデックスは範囲外です。");
  return a[index]
}

function second(a) {
  return nth(a, 1);
}

//console.log(nativeNth(letters,1));
//console.log(nativeNth({},1));
// p(nth(letters, 1));
// p(nth("abc", 0));
//p(nth({}, 2));
//p(nth(letters, 1000));
//p(nth(letters, 'aaa'));
// p(second(['a', 'b']));
// p(second("fogus"));
//p(second({}));