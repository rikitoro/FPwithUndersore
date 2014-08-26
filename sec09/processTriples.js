exports.processTriples = processTriples;

var _ = require('underscore');
var second = require('./nth.js').second;
var JSON = require('JSON');
var deferredSort = require('./deferredSort.js').deferredSort;
var force = require('./deferredSort.js').force;
var invoker = require('./invoker.js').invoker;
var dispatch = require('./dispatch.js').dispatch;
var pipeline = require('./pipeline.js').pipeline;
var validateTripleStore = require('./validateTripleStore').validateTripleStore;

var str = dispatch(invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString));

function postProcess (arrays) {
  return _.map(arrays, second);
}

function processTriples (data) {
  return pipeline(data
    , JSON.parse
    , validateTripleStore
    , deferredSort
    , force
    , postProcess
    , invoker('sort', Array.prototype.sort)
    , str);
}