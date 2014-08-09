exports.generator = generator;
exports.genHead   = genHead;
exports.genTail   = genTail;
exports.genTake   = genTake;

var trampoline = require('./trampoline.js').trampoline;
var cat = require('./cat.js').cat;
var partial = require('./partial.js').partial;

function generator (seed, current, step) {
  return {
    head: current(seed),
    tail: function() {
      //console.log("forced");
      return generator(step(seed), current, step)
    }
  };
}

function genHead (gen) {
  return gen.head;
}

function genTail (gen) {
  return gen.tail();
}

function genTake (n, gen) {
  var doTake = function(x, g, ret) {
    if (x === 0)
      return ret;
    else
      return partial(doTake, x - 1, genTail(g), cat(ret, genHead(g)));
  };

  return trampoline(doTake, n, gen, []);
}