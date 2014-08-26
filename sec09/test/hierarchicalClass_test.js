var sut = require('../hierarchicalClass.js');

var expect = require('expect.js');

describe('クラスの階層構造について',function() {
  it('CASClassはHoleClassのサブクラス',function() {
    expect(new sut.CASClass()).to.be.a('sut.HoleClass');
  });
});