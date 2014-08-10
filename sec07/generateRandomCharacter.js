exports.generateRandomCharacter = generateRandomCharacter;
exports.generateString = generateString;

var repeatedly = require('./iterateUntil.js').repeatedly;
var partial1   = require('./partial.js').partial1;
var _          = require('underscore');

var rand = partial1(_.random, 1);

function generateRandomCharacter () {
  return rand(26).toString(36);
}

function generateString (charGen, len) {
  return repeatedly(len, charGen).join('');
}

var composedRandomString = partial1(generateString, generateRandomCharacter);
exports.composedRandomString = composedRandomString;
