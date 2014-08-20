var sut = require('../curryDiv.js');

var expect = require('expect.js');

describe('leftCurryDiv',function() {
  it('被除数が固定される',function() {
    var div10By = sut.leftCurryDiv(10);
    expect(div10By(2)).to.eql(5);
  });
});

describe('rightCurryDiv',function() {
  it('除数が固定される',function() {
    var divBy10 = sut.rightCurryDiv(10);
    expect(divBy10(40)).to.eql(4);
  });
});
