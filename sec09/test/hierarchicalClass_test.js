var sut = require('../hierarchicalClass.js');

var expect = require('expect.js');

describe('クラスの階層構造について',function() {
  it('CASClassはHoleClassのサブクラス',function() {
    expect(new sut.CASClass()).to.be.a(sut.HoleClass);
  });
  it('TableBaseClassはObservedContainerClassのサブクラス',function() {
    expect(new sut.TableBaseClass()).to.be.a(sut.ObservedContainerClass);
  });
  it('TableBaseClassはHoleClassのサブクラス',function() {
    expect(new sut.TableBaseClass()).to.be.a(sut.HoleClass);
  });
  it('HoleClassはCASClassのサブクラスではない',function() {
    expect(new sut.HoleClass()).not.to.be.a(sut.CASClass);
  });

});

