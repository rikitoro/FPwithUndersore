exports.complement = complement;

var _ = require('underscore');

function complement(pred) {
  return function () {
    return !pred.apply(null, _.toArray(arguments));
  };
}
