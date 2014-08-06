// function uniqueString (len) {
//   return Math.random().toString(36).substring(2, len+2);
// }

// function uniqueString (prefix) {
//   return [prefix, new Date().getTime()].join('');
// }

function makeUniqueStringFunction(start) {
  var counter = start;
  return function(prefix) {
    return [prefix, counter++].join('');
  };
}

var uniqueString = makeUniqueStringFunction(0);

//////////////////////////
var p = console.log;
// p(uniqueString(10));
// p(uniqueString("argento"));
p(uniqueString("dari"));
p(uniqueString("dari"));
p(uniqueString("dari"));