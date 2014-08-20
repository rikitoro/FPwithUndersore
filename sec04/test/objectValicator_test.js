var sut = require('../objectValidator.js');

var expect = require('expect.js');
var always = require('../invoker.js').always;

describe('checker',function() {
  it('引数に渡された検証関数をすべてパスする場合は空の配列を返す',function() {
    var alwaysPasses = sut.checker(always(true), always(true));
    expect(alwaysPasses({})).to.eql([]);
  });
  it('検証関数をパスしない場合は検証関数のmessageフィールドの値が追加された配列が返る',function() {
    var fails = always(false);
    fails.message = "人生における過ち";
    var alwaysFails = sut.checker(fails);
    expect(alwaysFails(42)).to.eql(["人生における過ち"]);
  });

});

describe('validator',function() {
  it('メッセージと述語関数を渡すと新たな検証関数が返る',function() {
    var gonnaFail = sut.checker(sut.validator("ZONG!", always(false)));
    expect(gonnaFail(100)).to.eql(["ZONG!"])
  });
});

describe('checkerに2つのvalidatorを渡した場合',function() {
  var checkCommand2 = sut.checker(sut.validator("マップデータである必要があります", sut.aMap),
    sut.hasKeys('msg', 'type'));
  it('どちらの検証関数もパスしない場合',function() {
    expect(checkCommand2(42))
    .to.eql(["マップデータである必要があります","これらのキーが存在する必要があります： msg type"]);
  });

  it('最初の検証関数はパスする場合',function() {
    expect(checkCommand2({}))
    .to.eql(["これらのキーが存在する必要があります： msg type"]);
  });

  it('療法の検証関数をパスする場合',function() {
    expect(checkCommand2({hoge: 2, msg: "MSG", type: "RED"}))
    .to.eql([]);
  });

});

