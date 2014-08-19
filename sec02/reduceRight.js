exports.allOf = allOf;
exports.anyOf = anyOf;
exports.T = T;
exports.F = F;


var _ = require('underscore');

function allOf (/* 1つ以上の関数 */) {
  return _.reduceRight(arguments, function(truth, f) {
    return truth && f();
  }, true);
}

function anyOf(/* argments fs */) {
  return _.reduceRight(arguments, function(truth, f) {
    return truth || f();
  }, false);
}

function T() { return true }
function F() { return false }

