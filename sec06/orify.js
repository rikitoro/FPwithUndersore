exports.orify = orify;

var _ = require('underscore');

function orify (/* preds */) {
  var preds = _.toArray(arguments);

  return function(/* args */) {
    var args = _.toArray(arguments);

    var something = function(ps, truth) {
      if (_.isEmpty(ps))
        return truth;
      else
        return _.some(args, _.first(ps)) 
          || something(_.rest(ps), truth)
    }

    return something(preds, false);
  };
}