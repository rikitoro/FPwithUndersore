var sut = require('../deepClone.js');

var _ = require('underscore');
var expect = require('expect.js');

describe('deepClone', function() {
  var x = [{a: [1,2,3], b: 42}, {c: {d: []}}];
  it('等値なオブジェクトが返される', function() {
    expect(sut.deepClone(x)).to.eql(x);
  });

  it('ただし別のオブジェクトが返される', function() {
    expect(sut.deepClone(x)).not.to.be(x);
  });

});

describe('deepCloneの後、元のオブジェクトを変更', function() {
  var x = [{a: [1,2,3], b: 42}, {c: {d: []}}];
  var y = sut.deepClone(x);

  before(function() {
    x[1]['c']['d'] = 42;
  });
  it('等値ではなくなる', function() {
    expect(y).not.to.eql(x);
  });

});

describe('_.cloneの後、元のオブジェクトを変更', function() {
  var x = [{a: [1,2,3], b: 42}, {c: {d: []}}];
  var y = _.clone(x);

  before(function() {
    x[1]['c']['d'] = 42;
  });
  it('等値である', function() {
    expect(y).to.eql(x);
  });

});