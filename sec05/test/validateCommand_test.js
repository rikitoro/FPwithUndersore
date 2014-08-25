var sut = require('../validateCommand.js');

var expect = require('expect.js');

describe('createCommand',function() {
  it("数値を渡すと'マップデータである必要があります, 設定オブジェクトは正しいキーを持っている必要があります'というメッセージでエラーを投げる",function() {
    expect(function() {sut.createCommand(42)})
    .to.throwError(/マップデータである必要があります, 設定オブジェクトは正しいキーを持っている必要があります/);
  });

  it("適切なオブジェクトを渡すとそのオブジェクトを返す",function() {
    expect(sut.createCommand({msg: "", type: ""}))
    .to.eql({msg: "", type: ""});
  });

});

describe('createLaunchCommand',function() {
  it("countDownプロパティの無いオブジェクトを渡すと'設定オブジェクトにはcountDownプロパティが必要です'というメッセージでエラーを投げる",function() {
    expect(function() {sut.createLaunchCommand({msg: "", type: ""})})
    .to.throwError(/設定オブジェクトにはcountDownプロパティが必要です/);
  });

  it("適切なオブジェクトを渡すとそのオブジェクトを返す",function() {
    expect(sut.createLaunchCommand({msg: "", type: "", countDown: 20}))
    .to.eql({msg: "", type: "", countDown: 20});
  });

});
