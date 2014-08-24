exports.performCommandHardcoded = performCommandHardcoded;

var dispatch = require('./dispatch.js').dispatch;

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

exports.performCommand = performCommand;

/////////

var performAdminCommand = dispatch(
  isa('kill', function(obj) { return shutdown(obj.hostname); }),
  performCommand
  );

function shutdown(hostname) {
  console.log("shutdown: " + hostname );
  return true;
}

exports.performAdminCommand = performAdminCommand;

//////////

var performTrialUserCommand = dispatch(
  isa('join', function(obj) { alert("許可されるまで参加できません")} ),
  performCommand
  );

exports.performTrialUserCommand = performTrialUserCommand;


// p(performTrialUserCommand({type: 'join', target: 'foo'}));
// p(performTrialUserCommand({type: 'notify', message: 'hogehoge'}));

