var sut = require('../best.js');

var expect = require('expect.js');
var _ = require('underscore');

var people = [{name: "Fred", age: 65}, {name: "Lucy", age: 36}];

describe('plucker',function() {
  it('key名を渡すと、オブジェクトのkeyに対応するvalueを返す関数を返す',function() {
    var pluck_name = sut.plucker('name');
    expect(pluck_name({name: "Fred", age: 65}))
    .to.eql("Fred");
  });  
});

describe('finder(valueFun, bestFun, coll)',function() {
  it('valueFunにid関数、bestFunにmax関数、collに数配列を渡すとcollの最大値を返す',function() {
    expect(sut.finder(_.identity, Math.max, [1,5,2,3,4])).to.be(5);
  });

  it('オブジェクトの評価関数valueFunとしてpluckerを利用することができる',function() {
    expect(sut.finder(sut.plucker('age'), Math.max, people))
    .to.eql({name: "Fred", age: 65});
  });

  it('bestFunとして文字列先頭にLが入っているものを最良とする関数を渡しても良い', function() {
    expect(sut.finder(sut.plucker('name'), 
      function(x, y) { return (x.charAt(0) === "L") ? x : y; },
      people)).to.eql({name: "Lucy", age: 36});
  });

});


describe('best(fun, coll)', function() {
  it('数配列の最小値を求めることができる', function() {
    expect(sut.best(function(x, y) { return x < y; }, [2,5,1,3,4]))
    .to.be(1);
  });

  it('nameフィールドの先頭がLのオブジェクトを求めることができる',function() {
    expect(sut.best(function(x, y) { return (x.name.charAt(0) === "L"); }, people))
    .to.eql({name: "Lucy", age: 36});
  });
});