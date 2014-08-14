var sut = require('../Point.js');

var expect = require('expect.js');
var _      = require('underscore');

describe('Point', function() {
  var p = new sut.Point(0, 1);

  it('withX(val)で_xがvalとなったオブジェクトが返される', function() {
    expect(p.withX(1000)).to.eql(new sut.Point(1000, 1));
  });

  it('withX(val)を呼び出しても元のオブジェクトは変化しない', function() {
    p.withX(1001);
    expect(p).to.eql(new sut.Point(0,1));
  });

  it('withY(val)で_yがvalとなったオブジェクトが返される', function() {
    expect(p.withY(-42)).to.eql(new sut.Point(0, -42));
  });

  it('withY(val)を呼び出しても元のオブジェクトは変化しない', function() {
    p.withY(-42);
    expect(p).to.eql(new sut.Point(0,1));
  });

  it('withX, withYはチェーンメソッドとして使用できる', function() {
    expect(p.withX(100).withY(-100)).to.eql(new sut.Point(100, -100));
  });

});