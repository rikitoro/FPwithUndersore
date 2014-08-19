var sut = require('underscore');

var expect = require('expect.js');

var zombie = {name: "Bub", film: "Day of the Dead"};
var novels = [
  {title: "Chthon",   author: "Anthony"},
  {title: "Grendel",  author: "Gardner"},
  {title: "After Dark"}
];
var person = {name: "Romy", token: "j3982ij", password: "tigress"};
var libraty = [
  {title: "SICP", isbn: "02347289423", ed: 1},
  {title: "SICP", isbn: "02347289356", ed: 2},
  {title: "Joy of Closure", isbn: "1234567890", ed: 1}
];

describe('keys',function() {
  it('オブジェクトのキーを要素とする配列を返す',function() {
    expect(sut.keys(zombie)).to.eql(['name', 'film']);
  });
})

describe('values',function() {
  it('オブジェクトの値を要素とする配列を返す',function() {
    expect(sut.values(zombie)).to.eql(['Bub', 'Day of the Dead']);
  });
});

describe('pairs',function() {
  it('オブジェクトを渡すとkey-valueペアを[key,valule]に変換して返す',function() {
    expect(sut.pairs(zombie)).to.eql([['name', "Bub"], ['film', "Day of the Dead"]])
  });
});

describe('invert', function() {
  it('オブジェクトを渡すとkey-valueペアのkeyとvalueを入れ替えたオブジェクトを返す',function() {
    expect(sut.invert(zombie))
    .to.eql({"Bub": "name", "Day of the Dead": "film" })
  });
});

describe('pluck',function() {
  it('オブジェクトの配列から指定されたキーに対する値を取り出し配列として返す', function() {
    expect(sut.pluck(novels, 'author'))
    .to.eql(["Anthony", "Gardner", undefined]);
  });
});

describe('default', function() {
  it('オブジェクトに指定するキーがない場合はデフォルト値を設定したオブジェクトを返す',function() {
    var proc = sut.pluck(sut.map(novels, function(obj){
      return sut.defaults(obj, {author: "UNKNOWN"});
    }), 'author');
    expect(proc).to.eql(["Anthony", "Gardner", "UNKNOWN"]);
  });
});

describe('omit',function() {
  it('指定したkeyと対応するvalueを削除したオブジェクトを返す',function() {
    expect(sut.omit(person, 'token', 'password'))
    .to.eql({name: "Romy"});
  });
});

describe('pick',function() {
  it('指定したkeyと対応するvalueを取り出したオブジェクトを返す',function() {
    expect(sut.pick(person, 'token', 'password'))
    .to.eql({token: "j3982ij", password: "tigress"});
  });
});

describe('findWhere',function() {
  it('指定したkey-valueを持つオブジェクトを1つ返す', function() {
    expect(sut.findWhere(libraty, {title: "SICP", ed: 2}))
    .to.eql({title: "SICP", isbn: "02347289356", ed: 2});
  });
});

describe('where',function() {
  it('指定したkey-valueを持つオブジェクトをあるだけ返す', function() {
    expect(sut.where(libraty, {title: "SICP"}))
    .to.eql([{title: "SICP", isbn: "02347289423", ed: 1},{title: "SICP", isbn: "02347289356", ed: 2}])
  });
});
