exports.fail = fail;
exports.note = note;
exports.warn = warn;

function fail (thing) {
  throw new Error(thing);
}

// function warn(thing) {
//   console.log(["警告：", thing].join(''));
// }

function warn(str) {
  console.log("有効な年齢ではなさそうなものが入力されている。");
}
// function note(thing) {
//   console.log(["情報：", thing].join(''));
// }
function note() {}