
exports.fail = function (thing) {
  throw new Error(thing);
}

// function warn(thing) {
//   console.log(["警告：", thing].join(''));
// }
exports.warn = function (str) {
  console.log("有効な年齢ではなさそうなものが入力されている。");
}
// function note(thing) {
//   console.log(["情報：", thing].join(''));
// }
exports.note = function () {}