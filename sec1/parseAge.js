function parseAge(age) {
  _=require('../underscore.js');
  if (!_.isString(age)) throw new Error("引数は文字列である必要があります。");
  var a;

  console.log("age を数値に変換しようとしています。");

  a = parseInt(age, 10);

  if (_.isNaN(a)) {
    console.log(["age を数値に変換できませんでした：", age].join(''));
    a = 0;
  }

  return a;
}

console.log(parseAge("42"));
//console.log(parseAge(42));
//console.log(parseAge("frob"));