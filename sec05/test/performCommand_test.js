var sut = require('../performCommand.js');

var expect = require('expect.js');

describe('performCommandHardcoded', function() {
  it("type: 'notify'のオブジェクトを渡すとnotifyが実行され'notify'を返す",function() {
    expect(sut.performCommandHardcoded({type: 'notify', message: 'hi'}))
    .to.eql('notify');
  });
  it("type: 'join'のオブジェクトを渡すとchangeViewが実行され'changeView'を返す",function() {
    expect(sut.performCommandHardcoded({type: 'join', target: 'waiting-room'}))
    .to.eql('changeView');
  });
  it("その他のオブジェクトを渡すとalertが実行されErrorを投げる",function() {
    expect(function() {sut.performCommandHardcoded({type: 'wat'})})
    .to.throwError();
  });
});

describe('performCommand', function() {
  it("type: 'notify'のオブジェクトを渡すとnotifyが実行され'notify'を返す",function() {
    expect(sut.performCommand({type: 'notify', message: 'hi'}))
    .to.eql('notify');
  });
  it("type: 'join'のオブジェクトを渡すとchangeViewが実行され'changeView'を返す",function() {
    expect(sut.performCommand({type: 'join', target: 'waiting-room'}))
    .to.eql('changeView');
  });
  it("その他のオブジェクトを渡すとalertが実行されErrorを投げる",function() {
    expect(function() {sut.performCommand({type: 'wat',target: 'room'})})
    .to.throwError();
  });
});

describe('performAdminCommand', function() {
  it("type: 'kill'のオブジェクトを渡すとshutdownが実行されtrueを返す",function() {
    expect(sut.performAdminCommand({type: 'kill', hostname: 'localhost'}))
    .to.be.true;
  });
  it("type: 'join'のオブジェクトを渡すとchangeViewが実行され'changeView'を返す",function() {
    expect(sut.performAdminCommand({type: 'join', target: 'foo'}))
    .to.eql("changeView");
  });
});

describe('performTrialUserCommand', function() {
  it("type: 'join'のオブジェクトを渡すとalertが実行されErrorを投げる",function() {
    expect(function() {sut.performTrialUserCommand({type: 'join', target: 'foo'})})
    .to.throwError();
  });
  it("type: 'notify'のオブジェクトを渡すとnotifyが実行され'notify'を返す",function() {
    expect(sut.performTrialUserCommand({type: 'notify', message: 'hogehoge'}))
    .to.eql("notify");
  });
});