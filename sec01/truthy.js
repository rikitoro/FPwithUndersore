exports.existy = existy;
exports.truthy = truthy;
exports.doWhen = doWhen;

var _ = require('underscore');

function existy (x) {
  return x != null;
}

function truthy(x) {
  return (x !== false) && existy(x)
}

function doWhen (cond, action) {
  if (truthy(cond))
    return action();
  else
    return undefined;
}

function executeIfHasField(target, name) {
  return doWhen(existy(target[name]), function() {
    var result = _.result(target, name);
    console.log(['結果は', result].join(''));
    return result;
  });
}

///////////////////////////////////
var p = console.log;
// p (existy(null));
// p (existy(undefined));
// p (existy({}.notHere));
// p (existy((function(){})()));
// p (existy(0));
// p (existy(false));
// p ("/////")
// p ( truthy(false) );
// p ( truthy(undefined) );
// p ( truthy(0) );
// p ( truthy('') );
// p (executeIfHasField([1,2,3], 'reverse'));
// p (executeIfHasField({foo: 42}, 'foo'));
// p (executeIfHasField([1,2,3], 'notHere'));
// p ([null, undefined, 1, 2, false].map(existy));
// p ([null, undefined, 1, 2, false].map(truthy));
