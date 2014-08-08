exports.evenSteven = evenSteven;
exports.oddJohn = oddJohn;

var _ = require('underscore');

function evenSteven (n) {
  if (n === 0)
    return true;
  else
    return oddJohn(Math.abs(n) - 1);
}

function oddJohn (n) {
  if (n === 0) 
    return false;
  else 
    return evenSteven(Math.abs(n) - 1); 
}