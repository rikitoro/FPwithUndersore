exports.nativeNth = nativeNth;
exports.nth       = nth;
exports.second    = second;


var _ = require('underscore');
var fail = require('./fail.js').fail;



function nativeNth(a, index) {
  return a[index];
}

function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

function nth(a, index) {
  if (!_.isNumber(index)) fail("インデックスは数値である必要があります。");
  if (!isIndexed(a)) fail("インデックス指定可能でないデータ型はサポートされていません。");
  if ((index < 0) || (index > a.length -1 )) fail("指定されたインデックスは範囲外です。");
  return a[index]
}

function second(a) {
  return nth(a, 1);
}
