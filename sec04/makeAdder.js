exports.makeAdder = makeAdder;

function makeAdder(n) {
  return function(a) {
    return a + n;
  }
}
