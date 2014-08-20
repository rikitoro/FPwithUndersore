var sut = require('underscore');

var expect = require('expect.js');
var _ = require('underscore');

var array = ['a', 'b', 3, 'd', 4];
var people = [{name: "Rick", age: 30}, {name: "Jaka", age: 24}];
var alubums = [
  {title: "Sabbath Bloody Sabbath", genre: "Metal"},
  {title: "Scientist",              genre: "Dub"},
  {title: "SUndertow",              genre: "Metal"}
];


describe('find', function() {
  it('コレクションと述語関数を渡すと述語関数を満たす最初の要素を返す',function() {
    expect(sut.find(array, _.isNumber)).to.eql(3);
  });
});

describe('reject',function() {
  it('collectionと述語関数を渡すと述語関数を満たさない要素からなるcollectionを返す',function() {
    expect(sut.reject(array, _.isNumber))
    .to.eql(['a', 'b', 'd']);
  });
});

describe('all',function() {
  it('collectionと述語関数を渡すとすべての要素が述語を満たすときtrueを返す',function() {
    expect(sut.all([1,2,3,4], _.isNumber)).to.be.true;
  });
});

describe('any',function() {
  it('collectionと述語関数を渡すといずれかの要素が述語を満たすときtrueを返す',function() {
    expect(sut.any([1,2,'c',4], _.isString)).to.be.true;
  });
});

describe('sortBy',function() {
  it('評価関数で評価した値でソートされる',function() {
    expect(sut.sortBy(people, function(p) { return p.age; }))
    .to.eql([ {name: "Jaka", age: 24}, {name: "Rick", age: 30}]);
  });
});

describe('groupBy',function() {
  it('評価関数で評価された値でグループ化される',function() {
    expect(sut.groupBy(alubums, function(a) { return a.genre; }))
    .to.eql({ Metal: 
      [ { title: 'Sabbath Bloody Sabbath', genre: 'Metal' },
         { title: 'SUndertow', genre: 'Metal' } ],
      Dub: [ { title: 'Scientist', genre: 'Dub' } ] });
  });
});

describe('countBy',function() {
  it('評価関数で評価された値ごとの要素数が返される',function() {
    expect(sut.countBy(alubums, function(a) { return a.genre; }))
    .to.eql({ Metal: 2, Dub: 1});
  });
});



