var sut = require('../lameCSV.js');

var expect = require('expect.js');

var peopleCSV = "name, age, hair\nMerble, 35, red\nBob, 64, blonde";
var peopleTable = sut.lameCSV(peopleCSV);

describe('lameCSV', function() {
  it('peopleCSVを渡すとtable構造に変換する', function() {
    expect(sut.lameCSV(peopleCSV))
    .to.eql([['name', 'age', 'hair'],['Merble', '35', 'red'],['Bob', '64', 'blonde']]);
  });
});

describe('selectNames', function() {
  it("peopleTableを渡すと['Merble', 'Bob']を返す", function() {
    expect(sut.selectNames(peopleTable)).to.eql(['Merble', 'Bob']);
  });
});

describe('selectAges', function() {
  it("peopleTableを渡すと['35', '64']を返す", function() {
    expect(sut.selectAges(peopleTable)).to.eql(['35', '64']);
  });
});

describe('selectHairColor', function() {
  it("peopleTableを渡すと['red', 'blonde']を返す", function() {
    expect(sut.selectHairColor(peopleTable)).to.eql(['red', 'blonde']);
  });
});
