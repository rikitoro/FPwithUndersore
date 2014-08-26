var sut = require('../Container.js');

var expect = require('expect.js');

describe('Container#toString',function() {
  it('数値を渡して生成したインスタンスを文字列化して返す',function() {
    expect((new sut.Container(42)).toString()).to.eql("@<42>");
  });
  it('オブジェクトを渡して生成したインスタンスを文字列化して返す',function() {
    expect((new sut.Container({a:42,b:[1,2,3]})).toString())
    .to.eql("@<{\"a\":42,\"b\":[1,2,3]}>");
  });

});