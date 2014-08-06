function makeAdder(n) {
  return function(a) {
    return a + n;
  }
}

var add100 = makeAdder(100);
var p = console.log;
p(add100(25));