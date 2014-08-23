var sut = require('../deferredSort.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('deferredSort', function() {
  var deferredSorts = _.map([[2,1,3], [7,7,1], [0,9,5]], sut.deferredSort);

  it.skip('配列のソートを遅延実行する関数を生成できる',function() {
    expect(deferredSorts).to.have.length(3);
  });
  it('生成した関数はforceで実行できる', function() {
    expect(_.map(deferredSorts, sut.force)).to.eql([[1,2,3],[1,7,7],[0,5,9]]);
  });
});