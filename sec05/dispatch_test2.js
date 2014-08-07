var dispatch = require('./dispatch.js').dispatch;

/////////////////////////////////////////////////

// var _ = require('underscore');
// var existy = require('./truthy.js').existy;
// var construct = require('./construct.js').construct;
// var invoker = require('./invoker.js').invoker;
// var always = require('./invoker.js').always;

var p = console.log;


function performCommandHardcoded(command) {
  var result;

  switch (command.type) {
    case 'notify':
      result = notify(command.message);
      break;
    case 'join':
      result = changeView(command.target);
      break;
    default:
      alert(command.type);
  }

  return result;
}

////
function notify(msg) {
  console.log("notify is called");
  return "notify";
}

function changeView(target) {
  console.log("changeView is called");
  return "changeView";
}

function alert(type) {
  console.log(type);
  throw new Error;
}

// p(performCommandHardcoded({type: 'notify', message: 'hi'}));
// p(performCommandHardcoded({type: 'join', target: 'waiting-room'}));
// p(performCommandHardcoded({type: 'wat'}));

/////////////////////////////

function isa (type, action) {
  return function(obj) {
    if (type === obj.type) return action(obj);
  };
}

var performCommand = dispatch(
  isa('notify', function(obj) { return notify(obj.message); }),
  isa('join', function(obj) { return changeView(obj.target); }),
  function(obj) { alert(obj.type); }
  );

// p(performCommand({type: 'notify', message: 'hi'}));
// p(performCommand({type: 'join', target: 'waiting-room'}));
// p(performCommand({type: 'wat', target: 'room'}));

var performAdminCommand = dispatch(
  isa('kill', function(obj) { return shutdown(obj.hostname); }),
  performCommand
  );

function shutdown(hostname) {
  console.log("shutdown: " + hostname );
  return true;
}

// p(performAdminCommand({type: 'kill', hostname: 'localhost'}));
// p(performAdminCommand({type: 'join', target: 'foo'}));

var performTrialUserCommand = dispatch(
  isa('join', function(obj) { alert("許可されるまで参加できません")} ),
  performCommand
  );

// p(performTrialUserCommand({type: 'join', target: 'foo'}));
// p(performTrialUserCommand({type: 'notify', message: 'hogehoge'}));

