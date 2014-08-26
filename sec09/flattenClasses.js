var _ = require('underscore');
var fail = require('./fail.js').fail;
var existy = require('./truthy.js').existy;
var polyToString = require('./polyToString.js').polyToString;



function Container (val) {
  this._value = val;
  this.init(val);
}

Container.prototype.init = _.identity;

////////////////////////////////////////////
var HoleMixin = {
  setValue: function(newValue) {
    var oldValue = this._value;
    this.validate(newValue);
    this._value = newValue;
    this.notify(oldValue, newValue);
    return this._value;
  },
};

var Hole = function(val) {
  Container.call(this, val);
};
//////////////////////////////
var ObserverMixin = (function() {
  var _watchers = [];

  return {
    watch: function(fun) {
      _watchers.push(fun);
      return _.size(_watchers);
    },
    notify: function(oldValue, newValue) {
      _.each(_watchers, function(watcher) {
        watcher.call(this, oldValue, newValue);
      });
      return _.size(_watchers);
    },
  };
}());

/////////////////////////////////////
var ValidateMixin = {
  addValidator: function(fun) {
    this._validator = fun;
  },
  init: function(val) {
    this.validate(val);
  },
  validate: function(val) {
    if(existy(this._validator) && !this._validator(val))
      fail("不正な値を設定しようとしました：" + polyToString(val));
  },
};
//////////////////////////////

_.extend(Hole.prototype
  , HoleMixin
  , ValidateMixin
  , ObserverMixin);

//////////////////////////////
exports.Container = Container;
exports.Hole = Hole;