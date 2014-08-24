var sut = require('../stackAction.js');

var expect = require('expect.js');
var _ = require('underscore');
var pipeline = require('../pipeline.js').pipeline;

describe('stackAction',function() {
  it('連続したスタックイベントを配列として返す',function() {
    expect(sut.stackAction([])).to.eql([[1], [2,1], 2, [3,1]]);
  });

  it('pipelineへ渡すことができる',function() {
    pipeline(
      []
      , sut.stackAction
      , _.chain
      )
    .each(function(elem) { console.log(elem)})
  });
});