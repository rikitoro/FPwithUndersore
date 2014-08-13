var sut = require('../merge.js');

var expect = require('expect.js');
var _ = require('underscore');

describe('merge', function() {
  var person = { fname: "Simon" };
  var person_copy = _.clone(person);

  it('引数のオブジェクトをマージした結果を返す', function() {
    expect(sut.merge(person, {lname: "Petrikov"}, {age: 28}, {age: 108}))
    .to.eql({fname: "Simon", lname: "Petrikov", age: 108});
  });

  it('引数のオブジェクト自体は変化しない', function() {
    sut.merge(person, {lname: "Petrikov"}, {age: 28}, {age: 108});
    expect(person).to.eql(person_copy);
  });
});