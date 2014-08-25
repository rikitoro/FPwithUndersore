var _ = require('underscore');
var condition1 = require('./condition.js').condition1;
var validator = require('./objectValidator.js').validator;
var hasKeys   = require('./objectValidator.js').hasKeys;
var partial = require('./partial.js').partial;

//////////////////////////////////

function aMap(obj) {
  return _.isObject(obj);
}


/////////////////

var validateCommand = condition1(
  validator("マップデータである必要があります", _.isObject),
  validator("設定オブジェクトは正しいキーを持っている必要があります",
    hasKeys('msg', 'type'))
  );

var createCommand = partial(validateCommand, _.identity);

var createLaunchCommand = partial(
  condition1(
    validator("設定オブジェクトにはcountDownプロパティが必要です",
      hasKeys('countDown'))),
  createCommand
  );


exports.createCommand = createCommand;
exports.createLaunchCommand = createLaunchCommand;
