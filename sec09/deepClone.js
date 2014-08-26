exports.deepClone = deepClone;

var _ = require('underscore');

var existy = require('./truthy.js').existy

function deepClone (obj) {
  if(!existy(obj) || !_.isObject(obj))
    return obj;

  var temp = new obj.constructor();
  for (var key in obj) 
    if (obj.hasOwnProperty(key)) temp[key] = deepClone(obj[key]);
  return temp;
}