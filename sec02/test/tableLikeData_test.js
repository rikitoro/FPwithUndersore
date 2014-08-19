var sut = require('../tableLikeData.js');

var expect = require('expect.js');


var library = [
  {title: "SICP", isbn: "02347289423", ed: 1},
  {title: "SICP", isbn: "02347289356", ed: 2},
  {title: "Joy of Closure", isbn: "1234567890", ed: 1}
];

describe('project', function() {
  it('指定したkeyにたいしてプロジェクションをとる',function() {
    expect(sut.project(library,['title']))
    .to.eql([
      {title: "SICP"},
      {title: "SICP"},
      {title: "Joy of Closure"}
    ]);
  });
  it('指定した複数のkeyにたいしてプロジェクションをとる',function() {
    expect(sut.project(library,['title', 'isbn']))
    .to.eql([
      {title: "SICP", isbn: "02347289423"},
      {title: "SICP", isbn: "02347289356"},
      {title: "Joy of Closure", isbn: "1234567890"}
    ])
  });
});

describe('rename', function() {
  it('オブジェクトとkey名変換ルールを渡すとオブジェクトのkey名を変更したオブジェクトを返す',function() {
    expect(sut.rename({a: 1, b: 2}, {'a': 'AAA'}))
    .to.eql({'AAA': 1, b: 2});
  });
});

describe('as', function() {
  it('tableとkey名変換ルールを渡すとtableのkey名を変更する',function() {
    expect(sut.as(library, {ed: 'edition'}))
    .to.eql([
      {title: "SICP", isbn: "02347289423", edition: 1},
      {title: "SICP", isbn: "02347289356", edition: 2},
      {title: "Joy of Closure", isbn: "1234567890", edition: 1}
    ]);
  });

  it('asでキー名を変えた後、変更後のキーでプロジェクションが取れる',function() {
    expect(sut.project(sut.as(library, {ed: 'edition'}),['edition']))
    .to.eql([
      {edition: 1},
      {edition: 2},
      {edition: 1}
    ]);
  });
});

describe('restrict', function() {
  it('tableと条件を渡すとtableから条件を満たす行を抽出する',function() {
    expect(sut.restrict(library, function(book) { return book.ed >= 2; }))
    .to.eql([{title: "SICP", isbn: "02347289356", ed: 2}]);
  });

  it('asでキー名を変えた後、変更後のキーに対する条件で行を抽出できる',function() {
    expect(sut.restrict(sut.as(library, {ed: "EDITION"}),function(book) {
      return book.EDITION >= 2
    })).to.eql([{title: "SICP", isbn: "02347289356", EDITION: 2}]);
  });

});