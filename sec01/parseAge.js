var util = require('./fail.js');

function parseAge(age) {
  var _ = require('underscore');
  
  if (!_.isString(age)) util.fail("引数は文字列である必要があります。");
  var a;

  util.note("age を数値に変換しようとしています。");

  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    util.warn(["age を数値に変換できませんでした：", age].join(''));
    a = 0;
  }
  
  return a;
}
  
// function fail(thing) {
//   throw new Error(thing);
// }

// // function warn(thing) {
// //   console.log(["警告：", thing].join(''));
// // }
// function warn(str) {
//   console.log("有効な年齢ではなさそうなものが入力されている。");
// }
// // function note(thing) {
// //   console.log(["情報：", thing].join(''));
// // }
// function note() {}


console.log(parseAge("42"));
//console.log(parseAge(42));
console.log(parseAge("frob"));