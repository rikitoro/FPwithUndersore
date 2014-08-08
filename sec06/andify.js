exports.andify = andify;

var _ = require('underscore');

function andify (/* preds */) {
  var preds = _.toArray(arguments);

  return function(/* args */) {
    var args = _.toArray(arguments);

    var everything = function(ps, truth) {
      if (_.isEmpty(ps))
        return truth;
      else
        return _.every(args, _.first(ps)) 
          && everything(_.rest(ps), truth);
    };

    return everything(preds, true);
  };
}