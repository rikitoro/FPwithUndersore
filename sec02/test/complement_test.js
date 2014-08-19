var sut = require('../complement.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('complement',function() {
  it('述語関数を受け取って新たな述語関数を返す',function() {
    expect(_.filter(['a', 'b', 3, 'd'], sut.complement(_.isNumber)))
    .to.eql(['a', 'b', 'd']);
  });
});