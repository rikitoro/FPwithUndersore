var _ = require('underscore');

var nums = [100, 2, 25];

function div(x, y) { return x / y };

var p = console.log;
p ( _.reduce(nums, div) );
p ( _.reduceRight(nums, div) );

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

p ( allOf() );
p ( allOf(T, T) );
p ( allOf(T, T, T, T, F) );
p ( anyOf() );
p ( anyOf(T, T, F) );
p ( anyOf(F, F, F, F, F) );
