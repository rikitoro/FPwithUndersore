var sut = require('../createPerson.js');

var expect = require('expect.js');

describe('createPerson', function() {
  it('#setFirstName, setLastName, setAgeはメソッドチェーンをなす', function() {
    expect(
      sut.createPerson()
      .setFirstName("Mike")
      .setLastName("Fogus")
      .setAge(108)
      .toString())
    .to.eql("Mike Fogus 108");
  });

});