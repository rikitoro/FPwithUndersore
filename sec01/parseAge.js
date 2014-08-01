function parseAge(age) {
  _ = require('../underscore.js');
  
  if (!_.isString(age)) fail("引数は文字列である必要があります。");
  var a;

  note("age を数値に変換しようとしています。");

  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    warn(["age を数値に変換できませんでした：", age].join(''));
    a = 0;
  }
  
  return a;
}
  
function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log(["警告：", thing].join(''));
}

function note(thing) {
  console.log(["情報：", thing].join(''));
}



//console.log(parseAge("42"));
//console.log(parseAge(42));
console.log(parseAge("frob"));