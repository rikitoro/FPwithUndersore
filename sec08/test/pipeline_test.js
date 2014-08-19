var sut = require('../pipeline.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('pipeline', function() {
  it('何も渡さないとundefinedを返す',function() {
    expect(sut.pipeline()).to.be(undefined);
  });

  it('seedだけを渡すとseedそのものを返す', function() {
    expect(sut.pipeline(42)).to.be(42);
  });

  it('seedと変換関数をひとつ渡すとseedを変換したものを返す', function() {
    expect(sut.pipeline(42, function(n) { return -n; })).to.be(-42);
  });

  it('変換関数を複数渡すと順に変換した最終結果を返す',function() {
    var fifth = function(a) { return sut.pipeline(a, _.rest, _.rest, _.rest, _.rest, _.first); };
    expect(fifth([1,2,3,4,5])).to.be(5);
  });

  it('pipelineを使って構築した変換関数を別のpipelineに挿入できる',function() {
    var fifth = function(a) { return sut.pipeline(a, _.rest, _.rest, _.rest, _.rest, _.first); };
    var negativeFifth = function(a) { return sut.pipeline(a, fifth, function(n) { return -n; }); };
    expect(negativeFifth([1,2,3,4,5,6,7,8,9])).to.be(-5);    
  });
});
