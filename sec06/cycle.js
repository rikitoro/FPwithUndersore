exports.cycle = cycle;

var cat = require('./cat.js').cat;

function cycle (times, ary) {
  if (times <= 0)
    return [];
  else
    return cat(ary, cycle(times - 1, ary));
}