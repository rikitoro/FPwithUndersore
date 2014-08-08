exports.myLength = myLength;

var _ = require('underscore');

function myLength (ary) {
  if (_.isEmpty(ary))
    return 0;
  else
    return 1 + myLength(_.rest(ary));
}
