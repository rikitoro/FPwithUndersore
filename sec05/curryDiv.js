exports.leftCurryDiv = leftCurryDiv;
exports.rightCurryDiv = rightCurryDiv;

function leftCurryDiv (n) {
  return function(d) {
    return n/d;
  };
}

function rightCurryDiv(d) {
  return function(n) {
    return n/d;
  };
}
