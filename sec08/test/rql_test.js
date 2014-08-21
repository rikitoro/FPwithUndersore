var sut = require('../rql.js');

var expect = require('expect.js');

var library = [
  {title: "SICP", isbn: "02347289423", ed: 1},
  {title: "SICP", isbn: "02347289356", ed: 2},
  {title: "Joy of Closure", isbn: "1234567890", ed: 1}
];

describe('firstEditions',function() {
  it('tableからedをeditionにリネームしeditionが1のものを取り出す',function() {
    expect(sut.firstEditions(library))
    .to.eql([
      {title: "SICP", isbn: "02347289423", edition: 1},
      {title: "Joy of Closure", isbn: "1234567890", edition: 1}
    ]);
  });
});

describe('allFirstEditions', function() {
  it('tableからedをeditionにリネームしeditionが1のものを取り出す',function() {
    expect(sut.allFirstEditions(library))
    .to.eql([
      {title: "SICP", isbn: "02347289423", edition: 1},
      {title: "Joy of Closure", isbn: "1234567890", edition: 1}
    ]);
  });  
});