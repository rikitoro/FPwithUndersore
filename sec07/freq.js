var _          = require('underscore');
var curry2     = require('./curry.js').curry2


var freq = curry2(_.countBy)(_.identity);

exports.freq = freq;

