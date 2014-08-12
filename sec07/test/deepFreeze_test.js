var sut = require('../deepFreeze.js');

var expect = require('expect.js');

describe('Object#freeze', function() {

  var x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];
  var x_org = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];  

  beforeEach(function() {
    Object.freeze(x);
  });

  it("freezeしたオブジェクトの最上位レベルを変更しようとしても" + 
    "オブジェクトは変化しない", function() {
      x[0] = "";
      expect(x).to.eql(x_org);
  });

  it("freezeしたオブジェクトの下位レベルは変更できてしまう", function() {
    x[1]['c']['d'] = 1000;
    expect(x).not.to.eql(x_org);
  });

});


describe('deepFreeze', function() {
  var x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];
  var x_org = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];  

  beforeEach(function() {
    sut.deepFreeze(x);
  });

  it("deepFreezeしたオブジェクトの最上位レベルは変更できない", function() {
    x[0] = null;
    expect(x).to.eql(x_org);
  });

  it("deepFreezeしたオブジェクトの下位レベルも変更できない", function() {
    x[1].c.d = 42;
    expect(x).to.eql(x_org);
  });

});