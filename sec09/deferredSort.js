exports.deferredSort = deferredSort;
exports.force = force;

var lazyChain = require('./lazyChain').lazyChain;

function deferredSort(ary) {
  return lazyChain(ary).invoke('sort');
}

function force (thunk) {
  return thunk.force();
}