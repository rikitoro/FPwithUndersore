var sut    = require('../truthy.js');

var expect = require('expect.js');

describe('existy', function() {
  it('nullを渡すとfalseを返す', function() {
    expect(sut.existy(null)).to.be.false;
  });

  it('undefinedを渡すとfalseを返す', function() {
    expect(sut.existy(undefined)).to.be.false;
  });

  it('{}.notHereを渡すとfalseを返す', function() {
    expect(sut.existy(undefined)).to.be.false;
  });

  it('(function(){})()を渡すとfalseを返す', function() {
    expect(sut.existy((function (){})())).to.be.false;
  });

  it('0を渡すとtrueを返す', function() {
    expect(sut.existy(0)).to.be.true;
  });

  it('falseを渡すとtrueを返す', function() {
    expect(sut.existy(false)).to.be.true;
  });

  it("[null, undefined, 1, 2, false].map(existy)を実行すると" + 
    "[false, false, true, true, true]を返す", function() {
    expect([null, undefined, 1, 2, false].map(sut.existy))
    .to.eql([false, false, true, true, true]);
  });
});

describe('truthy', function() {
  it('falseを渡すとfalseを返す', function() {
    expect(sut.truthy(false)).to.be.false;
  });

  it('undefinedを渡すとfalseを返す', function() {
    expect(sut.truthy(undefined)).to.be.false;
  });

  it('0を渡すとtrueを返す', function() {
    expect(sut.truthy(0)).to.be.true;
  });

  it("''を渡すとtrueを返す", function() {
    expect(sut.truthy(0)).to.be.true;
  });

  it("[null, undefined, 1, 2, false].map(truthy)を実行すると" + 
    "[false, false, true, true, true]を返す", function() {
    expect([null, undefined, 1, 2, false].map(sut.truthy))
    .to.eql([false, false, true, true, false]);
  });
});

describe('executeIfHasField', function() {
  it("[1,2,3], 'reverse'を渡すと[3,2,1]を返す", function() {
    expect(sut.executeIfHasField([1,2,3], 'reverse')).to.eql([3,2,1]);
  });

  it("{foo: 42}, 'foo'を渡すと42を返す", function() {
    expect(sut.executeIfHasField({foo: 42}, 'foo')).to.eql(42);
  });

  it("[1,2,3], 'notHere'を渡すとundefinedを返す", function() {
    expect(sut.executeIfHasField([1,2,3], 'notHere')).to.be(undefined);
  });


});