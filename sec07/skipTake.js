exports.skipTake = skipTake;
exports.skipTake2 = skipTake2;
var _ = require('underscore');

function skipTake (n, coll) {
  var ret = [];

  var sz = _.size(coll);
  for (var index = 0; index < sz; index += n) {
    ret.push(coll[index]);
  };

  return ret;
}

function skipTake2 (n, coll) {
  return _.filter(coll,
    function(obj, index) {return (index % n) === 0; });
}
