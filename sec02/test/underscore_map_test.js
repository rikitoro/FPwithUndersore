var sut = require('underscore');
var _ = require('underscore');

var expect = require('expect.js');

describe('map',function() {
  var obj = {a: 1, b: 2};
  var ary_obj = [1, 2];

  it('イテレータとしてid関数を渡すとオブジェクトの各値を要素とする配列を返す',function() {
    expect(sut.map(obj, _.identity)).to.eql(ary_obj);
  });

  it('イテレータにはオブジェクトの値とキーが引数として渡される',function() {
    expect(sut.map(obj, function(v, k) { return [k, v]}))
    .to.eql([['a', 1], ['b', 2]]);
  });

  it('イテレータにはオブジェクトの値とキーとオブジェクト自体が引数として渡される',function() {
    expect(sut.map(obj, function(v, k, coll) { return [k, v, coll]}))
    .to.eql([['a', 1, obj], ['b', 2, obj]]);
  });

});