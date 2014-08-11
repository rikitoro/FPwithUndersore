exports.summ = summ;
exports.summRec = summRec;

var _ = require('underscore');

function summ (array) {
  var result = 0;
  var sz = array.length;

  for (var i = 0; i < sz; i++)
    result += array[i];

  return result;
}

function summRec (array, seed) {
  if (_.isEmpty(array))
    return seed;
  else
    return summRec(_.rest(array), _.first(array) + seed);
}
