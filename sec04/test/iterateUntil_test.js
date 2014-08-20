var sut = require('../iterateUntil.js');

var expect = require('expect.js');

describe('repeat', function() {
  it('回数と値を渡すと値を回数回繰り返した配列を返す',function() {
    expect(sut.repeat(3, "Major")).to.eql(["Major", "Major", "Major"]);
  });
});

describe('repeatedly', function() {
  it('回数と関数を渡すと関数を回数回まで順に実行した値の配列を返す', function() {
    expect(sut.repeatedly(3, function() { return "Odelay!"; } ))
    .to.eql(["Odelay!","Odelay!","Odelay!"]);
  });
});

describe('iterateUntil(fun, check, int)', function() {
  it('intを初期値としてcheck関数が成り立つまでの間、funを繰り返し適応した値の配列を返す', function() {
    expect(sut.iterateUntil(function(n) { return n + n; },
      function(n) { return n <= 1024; },
      1 )).to.eql([2,4,8,16,32,64,128,256,512,1024]);
  });
});