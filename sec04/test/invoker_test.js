var sut = require('../invoker.js');

var expect = require('expect.js');
var repeatedly = require('../iterateUntil.js').repeatedly;

describe('always(value)',function() {
  it('定数値valueを返す定数関数を返す',function() {
    expect(repeatedly(3, sut.always('Odelay!!!')))
    .to.eql(['Odelay!!!','Odelay!!!','Odelay!!!'])
  });
});

describe('rev',function() {
  it('渡した配列を逆順にした配列を返す',function() {
    expect(sut.rev([1,2,3])).to.eql([3,2,1]);
  });
});

