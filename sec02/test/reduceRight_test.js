var sut = require('../reduceRight.js');

var expect = require('expect.js');
var _ = require('underscore');
var T = sut.T;
var F = sut.F;

var nums = [100, 2, 25];
function div (x, y) { return x / y; };

describe('_.reduce',function() {
  it('左側の要素から関数が適用される',function() {
    expect(_.reduce(nums, div))
    .to.eql((100/2)/25);
  });
});

describe('_.reduceRight',function() {
  it('右側の要素から関数が適用される',function() {
    expect(_.reduceRight(nums, div))
    .to.eql((25/2)/100);
  });
});

describe('allOf',function() {
  it('何も渡さないときはtrueを返す', function() {
    expect(sut.allOf()).to.be.true;
  });

  it('T,T,Tを渡すとtrueを返す', function() {
    expect(sut.allOf(T,T,T)).to.be.true;
  });

  it('ひとつでもFを渡すとfalseを返す', function() {
    expect(sut.allOf(T,T,T,T,T,F)).to.be.false;
  });
});

describe('anyOf',function() {
  it('何も渡さないときはfalseを返す', function() {
    expect(sut.anyOf()).to.be.false;
  });

  it('ひとつでもTを渡すとtrueを返す', function() {
    expect(sut.anyOf(T,T,F)).to.be.true;
  });

  it('すべてFを渡すとfalseを返す', function() {
    expect(sut.anyOf(F,F,F,F,F)).to.be.false;
  });

});
