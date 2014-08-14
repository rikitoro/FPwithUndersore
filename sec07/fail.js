exports.fail = fail;
exports.note = note;
exports.warn = warn;

function fail (thing) {
  throw new Error(thing);
}


function warn(str) {
  console.log("有効な年齢ではなさそうなものが入力されている。");
}

function note() {}